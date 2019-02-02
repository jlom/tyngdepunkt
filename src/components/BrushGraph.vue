<template>
    <article class="brushGraph">
        <div class="threshold"
            :style="`top: ${25 * (1-(threshold*(100/max))/100)}rem`"></div>
        <article
            class="brushBar"
            v-for="(result, id) in parliament"
            :key="id">
            <article class="brushBar_bar"
                :id="`brushBar_bar_${id}`"
                @mousedown="registerMove(parliament, id, $event)">
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
     * @TODO: Make the graph scale automatically if a bar crosses the max-range
     */
    private max: number = 40;

    private totalPct = () => {
        let total = 0;
        Object.values(this.$store.state.parliament as Result).forEach((result) => {
            total += result.percentage;
        });
        return Math.round(total * 10) / 10;
    }
    private totalSeats = () => {
        let total = 0;
        Object.values(this.$store.state.parliament as Result).forEach((result) => {
            total += result.seats;
        });
        return total;
    }

    private registerMove(results: Results, id: string, e: MouseEvent) {
        // Don't go selecting stuff
        e.preventDefault();

        if (this.locked[id]) { return; }

        // How far up was the mouse when we started?
        let y: number = e.y;

        // How tall is the container (which maps to the `max` percentage)
        const target = document.getElementById(`brushBar_bar_${id}`) as Element;
        const height = target.clientHeight;

        // This gets called everytime the mouse moves
        const move = (moveEvent: MouseEvent) => {
            const newY: number = moveEvent.y;
            if (newY === y) { return; } // Nothing to see here

            const delta = y - newY; // in px
            const pctValue = this.max / height; // 1px = N %
            const newValue = results[id].percentage + (delta * pctValue); // delta in %

            // if (results[id].percentage < 0) { return; }

            const rebalancedResults = this.balanceResults(id, newValue);

            if (rebalancedResults !== null) {
                y = newY;
                results = rebalancedResults;
                this.$store.commit('updateNationalPct', rebalancedResults);
            } else {
                y = newY;
            }
        };

        document.addEventListener('mousemove', move);

        addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', move);
        });

    }

    /**
     * Make the sum of our results balance out to 100%, and spread the
     * difference evenly among all the unlocked parties.
     * @param id The party ID of the party that should serve as the basis
     * @param percentage The percentage the `id` party should have afterwards
     * @returns Balanced results as Results.
     */
    private balanceResults(id: string, percentage: number): Results | null {
        // No parties should be allowed to get negative percentages
        percentage = percentage < 0 ? 0 : percentage;

        const results: Results = this.$store.state.parliament;
        const clonedResults: Results = JSON.parse(JSON.stringify(results));
        const parties = Object.keys(clonedResults);

        const result = (ptyID: string): number => {
            return +clonedResults[ptyID].percentage;
        };
        clonedResults[id].percentage = Math.round(percentage * 10 ) / 10;

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

        if (moveableParties.length === 0) {
            return null;
        }

        // @FIXME: When a party hits 0 or 100 when dividing, we don't yet do
        // another pass, and divide the overflow - and we end up with a
        // non-100% result.
        const divided = distribution / moveableParties.length;
        moveableParties.forEach((party) => {
            const balancedResult = result(party) + divided;
            if (balancedResult > 100) {
                const overflow = balancedResult - 100;
                distribution += overflow;
                clonedResults[party].percentage = 100;
            } else if (balancedResult < 0) {
                const overflow = Math.abs(balancedResult);
                distribution -= overflow;
                clonedResults[party].percentage = 0;
            } else {
                distribution -= divided;
                clonedResults[party].percentage = Math.round(balancedResult * 10 ) / 10;
            }
        });

        return clonedResults;
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

</style>
