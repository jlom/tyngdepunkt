<template>
    <article class="brushGraph">
        <div class="threshold"
            :style="`top: ${25 * (1-(threshold*(100/max))/100)}rem`"></div>
        <article
            class="brushBar"
            v-for="(result, id) in parliament"
            :key="id">
            <article class="brushBar_bar">
                <div class="caption"
                    :style="`
                        bottom: calc(${result.percentage}% * ${100 / max})
                    `">
                    <span class="direction"
                        :class="{
                            'up': diffResult(id, result).percentage > 0,
                            'down': diffResult(id, result).percentage < 0
                        }">
                        {{diffResult(id, result).percentage}} p.
                    </span>
                    {{result.percentage}}%
                </div>
                <input type="range"
                    v-model="result.percentage"
                    :name="`brushBar_${id}`"
                    :id="`brushBar_${id}`"
                    :disabled="locked[id]"
                    @input="updateResult(id, $event.target.value, parliament)"
                    min=0
                    :max="max"
                    step="0.1"
                />
                <!--
                    We don't have much control over the range slider,
                    so this div will be the actual visible bar of the chart.
                -->
                <div class="brushBar_chartBar"
                    :style="`
                        background-color: ${partyByID(id).color};
                        height: calc(${result.percentage}% * ${100 / max})
                    `">
                </div>
            </article>

            <label :for="`brushBar_${id}`">
                <strong>{{partyByID(id).legend}}</strong>
            </label>

            <br>

            <input type="checkbox"
                class="locked"
                v-model="locked[id]" />

        </article>
    </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapState, mapGetters } from 'vuex';

@Component({
    components: {},
    computed: {
        ...mapState(['parliament', 'locks', 'threshold']),
        ...mapGetters(['partyByID', 'diffResult']),
    },
})
export default class BrushGraph extends Vue {
    /**
     * An object with party IDs as keys, and their locked status as value.
     * Locked parties can't move, and won't be balanced.
     */
    public locked: {[id: string]: boolean} = {};

    /**
     * The range of the graph, in percent
     */
    private max: number = 40;

    /**
     * Make the sum of our results balance out to 100%, and spread the
     * difference evenly among all the unlocked parties.
     * @param id The party ID of the party that should serve as the basis
     * @param percentage The percentage the `id` party should have afterwards
     * @returns Balanced results as Results.
     */
    private balanceResults(results: Results, id: string, percentage: number): Results {
        const parties = Object.keys(results);
        const balanced = results;
        const result = (ptyID: string): number => {
            return +results[ptyID].percentage;
        };

        // Un-fuck the percentage that gets stringified
        results[id].percentage = result(id);

        // How many percentages do we have on the graph?
        let distribution = 0;
        parties.forEach((party) => {
            distribution += result(party);
        });
        distribution = 100 - distribution;

        // Which parties can we divide the surplus or deficiency amongst?
        const moveableParties = parties.filter((party) => {
            const unlocked = this.locked[party] !== true;
            const otherParty = party !== id;
            let canMove;
            if (distribution > 0) {
                canMove = result(party) < 100;
            } else {
                canMove = result(party) > 0;
            }

            return unlocked && otherParty && canMove;
        });

        // @FIXME: When a party hits 0 or 100 when dividing, we don't yet do
        // another pass, and divide the overflow - and we end up with a
        // non-100% result.
        //
        // Also, there's nothing stopping us from going above 100% if there's
        // only two parties that can move, and one hits zero.
        const divided = distribution / moveableParties.length;
        moveableParties.forEach((party) => {
            const balancedResult = result(party) + divided;
            if (balancedResult > 100) {
                const overflow = balancedResult - 100;
                distribution += overflow;
                balanced[party].percentage = 100;
            } else if (balancedResult < 0) {
                const overflow = Math.abs(balancedResult);
                distribution -= overflow;
                balanced[party].percentage = 0;
            } else {
                distribution -= divided;
                balanced[party].percentage = Math.round(balancedResult * 10 ) / 10;
            }
        });

        return balanced;
    }


    private updateResult(id: string, percentage: number, res: Results): void {
        const state = this.$store.state;
        const results: Results = this.balanceResults(res, id, percentage);
        this.$store.commit('updateNationalPct', results);
    }
}
</script>

<style lang="sass" scoped>
    $background: #F7F9FA
    $height: 25rem
    $width: 4rem

    .brushGraph
        position: relative

    .threshold
        width: 100%
        position: absolute
        border-bottom: 1px dotted red

    .brushBar
        float: left
        width: $width
        margin: 0 .5rem
        text-align: center

    .brushBar_bar
        height: $height
        width: $width
        position: relative
        margin: 0 0 .5rem

        &::after
            content:

    .caption
        position: absolute
        z-index: 1
        font-size: .9rem
        width: $width
        padding-bottom: .3rem
        cursor-events: none
        font-weight: 500

        .direction
            font-weight: 400
            font-size: .9rem
            color: #666
            display: block
            transition: color 300ms ease

            &::after
                content: ''
                display: block
                height: 0
                width: 0
                border: .35rem solid #666
                margin: .5rem auto
                transition: border 300ms ease

            &.up
                color: green
                &::before
                    content: '+ '
                &::after
                    background: transparent
                    border-left: .5rem solid transparent
                    border-right: .5rem solid transparent
                    border-top: 0 solid transparent
                    border-bottom: .7rem solid green

            &.down
                color: red
                &::after
                    background: transparent
                    border-left: .5rem solid transparent
                    border-right: .5rem solid transparent
                    border-bottom: 0 solid transparent
                    border-top: .7rem solid red

    .brushBar_chartBar
        border-radius: 0
        position: absolute
        bottom: 0
        left: 0
        right: 0
        width: $width

    input[type=range]
        width: $height
        height: $width
        transform: rotate(-90deg)
        transform-origin: ($height/2) ($height/2)
        -webkit-appearance: none
        margin: 0

        &::-webkit-slider-runnable-track
            background: $background
            cursor: pointer

        &::-moz-range-track
            background: red

        &::-ms-fill-lower
            background: red

        &:focus
            outline: none

        &::-webkit-slider-thumb
            -webkit-appearance: none
            background: none
            height: $width
            width: .75rem

    .locked

</style>
