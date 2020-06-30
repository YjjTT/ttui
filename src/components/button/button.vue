<template>
    <button class="t-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
        <t-icon class="icon" v-if="icon && !loading" :name="icon"></t-icon>
        <t-icon v-if="loading" class="loading icon" name="loading"></t-icon>
        <div class="content"><slot></slot></div>
    </button>
</template>

<script>
    export default {
        name: "t-button",
        props: {
            icon: {},
            loading: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator (value) {
                    return !(value !== 'left' && value !== 'right');
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "../../assets/scss/config.scss";
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .t-button {
        height: $button-height;
        padding: 0 1em;
        font: inherit;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        background: $button-bg;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {
            border-color: $border-color-hover;
        }
        &:active {
            background-color: $button-active-bg;
        }
        &:focus {
            outline: none;
        }
        > .content {
            order: 2;
        }
        > .icon {
            order: 1;
            margin-right: .1em;
        }
        &.icon-right {
            > .content {
                order: 1;
            }
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .1em;
            }
        }
        .loading {
            animation: spin 2s infinite linear;
        }
    }
</style>
