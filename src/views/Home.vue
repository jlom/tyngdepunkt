<template>
    <main>
        <MainHeader />
        <article class="siderail">
            <h2>Mandatfordeling</h2>
            <SeatChart />
            <SeatTable />

            <h2>Koalisjonsalternativ</h2>
            <Coalitions />
        </article>
        <article class="mainrail">
            <h2>Oppslutning</h2>
            <BrushGraph />

            <h2 class="headHead">Overskrifter</h2>
            <Headlines />
        </article>
        <article class="headlines">
        </article>
    </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SeatChart from '@/components/SeatChart.vue';
import SeatTable from '@/components/SeatTable.vue';
import BrushGraph from '@/components/BrushGraph.vue';
import Coalitions from '@/components/Coalitions.vue';
import MainHeader from '@/components/MainHeader.vue';
import Headlines from '@/components/Headlines.vue';

@Component({
    components: {
        SeatChart,
        SeatTable,
        BrushGraph,
        Coalitions,
        MainHeader,
        Headlines,
    },
})
export default class Home extends Vue {}
</script>

<style lang="sass">
    $main-brand: rgba(237, 114, 45, 1.00)

    main
        margin-top: 2rem
        width: 95rem

    .siderail
        margin: 0 0 0 5rem
        float: left
        width: 20rem
        display: inline-block

    .mainrail
        margin: 0 5rem 0 15rem
        display: inline-block

    h2
        font-weight: normal
        width: 15rem
        border-bottom: .2rem solid $main-brand
        text-align: right
        padding: 0 0 .5rem
        transform: rotate(-90deg) translateY(-17rem)
        transform-origin: bottom right

        &.headHead
            transform: rotate(-90deg) translateY(-17rem) translateX(-1rem)
</style>
