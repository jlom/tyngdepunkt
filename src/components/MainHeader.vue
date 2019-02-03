<template>
    <header>
        <img alt="Stortinget" src="/stortinget.svg">
        <h1>Rette tyngdepunkt</h1>

        <ol class="countdown">
            <li v-for="(elex, index) in upcomingElex.slice(0, 2)"
                :key="index">
                {{elex.title}}
                <strong>{{countdown(elex)}}</strong>
            </li>
        </ol>
    </header>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import dateFns from 'date-fns';
import nb from 'date-fns/locale/nb';

@Component({})
export default class MainHeader extends Vue {

    private upcomingElex = [
        {
            title: 'Kommunevalg',
            date: new Date(2019, 8, 9, 21),
            confirmed: true,
        },
        {
            title: 'Stortingsvalg',
            date: new Date(2021, 8, 13, 21),
            confirmed: false,
        },
    ];

    private countdown = (elex: any): string => {
        const now = new Date();
        if (elex.confirmed) {
            return `${dateFns.distanceInWordsStrict(elex.date, now, {
                locale: nb,
                unit: 'd',
            })}`;
        } else {
            return `${dateFns.distanceInWordsStrict(elex.date, now, {
                locale: nb,
                unit: 'd',
            })}`;
        }
    }
}
</script>

<style lang="sass" scoped>
    header
        margin-left: 5rem

    img
        height: 2rem
        width: 6.5rem
        object-fit: contain

    h1
        font-family: 'Grifo M'
        font-size: 3rem
        display: inline-block
        padding-left: 2rem

    .countdown
        float: right
        list-style: none
        margin: 0

        li
            float: left
            margin: 1rem

            &:not(:first-of-type)
                opacity: .5

        strong
            display: block
            font-size: 2rem

</style>

