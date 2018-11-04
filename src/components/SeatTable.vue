<template>
    <article>
        <table>
            <tr v-for="(result, id) in parliament"
                v-if="result.seats > 0"
                :key="id">

                <td class="partyName">{{ partyByID(id).name }}</td>
                <td class="seats">{{result.seats}}</td>
                <td class="diff"
                    :class="{'up': diffResult(id, result).seats > 0}">{{diffResult(id, result).seats}}
                </td>
            </tr>
        </table>
    </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapState, mapGetters } from 'vuex';

@Component({
    computed: {
        ...mapState(['parliament']),
        ...mapGetters(['partyByID', 'diffResult']),
    },
})
export default class SeatTable extends Vue {}
</script>

<style lang="sass" scoped>
    table
        margin: 2rem 0
        width: 23rem
        font-size: 1rem
    tr
        height: 2rem
    .partyName
        width: 17.2rem
    .seats
        width: 2rem
    .diff
        text-align: right
        opacity: .5
        &.up::before
            content: '+'
</style>
