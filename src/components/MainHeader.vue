<template>
    <header>
        <img alt="Stortinget" src="/stortinget.svg">
        <h1>Rette tyngdepunkt</h1>
    </header>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class MainHeader extends Vue {}
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

</style>

