<template>
    <svg class="t-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script>
    export default {
        name: "t-icon",
        props: ['name']
    }
</script>

<style lang="scss">
    .t-icon {
        width: 1em;
        height: 1em;
    }
</style>
