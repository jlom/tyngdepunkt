<template>
    <article>
        <div class="majorityLine"></div>

        <ul>
            <li v-for="(coalition, idx) in coalitions"
                :key="idx"
                :class="{'majority': coalitionSeats(coalition) >= 85}">
                {{coalition.name}} ({{coalitionSeats(coalition)}})

                <article>
                <div v-for="(party, i) in coalition.parties"
                    class="member"
                    :key="i"
                    :style="`
                        background-color: ${partyByID(party).color};
                        width: ${(parliament[party].seats * 0.5917) * (100 / 60)}%
                    `"
                    :title="partyByID(party).name"></div>
                </article>
            </li>
        </ul>
    </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapState, mapGetters } from 'vuex';

@Component({
    computed: {
        ...mapState(['coalitions', 'parliament']),
        ...mapGetters(['partyByID', 'coalitionSeats']),
    },
})
export default class Coalitions extends Vue {}
</script>

<style lang="sass" scoped>
    ul
        width: 23rem
        list-style: none
        margin: 0
        padding: 0
        white-space: nowrap

    li
        margin-top: 0
        margin-bottom: 1rem

    .majority
        font-weight: 700

    .member
        display: inline-block
        height: .6rem

    article
        width: 23rem
        position: relative

    .majorityLine
        height: calc(100% + 2rem)
        width: 1px
        border-left: 1px solid #999
        position: absolute
        left: 83.833%
        margin-top: -1rem
</style>
