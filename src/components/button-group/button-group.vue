<template>
    <div class="t-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "t-button-group",
        mounted() {
            for (let node of this.$el.children) {
                if (node.nodeName.toLowerCase() !== 'button') {
                    console.warn(`t-button-group的子元素应该全是t-button, 但是你的写的是${node.nodeName.toLowerCase()}`)
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "../../assets/scss/config.scss";
    .t-button-group {
        display: inline-flex;
        vertical-align: middle;
        > .g-button {
            border-radius: 0;
            margin-left: -1px;
            &:first-child {
                border-top-left-radius: $border-radius;
                border-bottom-left-radius: $border-radius;
            }
            &:last-child {
                border-top-right-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>
