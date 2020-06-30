<template>
    <div id="app">
        <div class="row">
            <t-button icon="setting">按钮</t-button>
            <t-button :loading="loading1" @click="loading1 = !loading1">按钮</t-button>
            <t-button icon="down" icon-position="right">按钮</t-button>
        </div>

        <t-button-group>
            <t-button icon="left-arrow">上一步</t-button>
            <t-button icon="right-arrow" icon-position="right">下一步</t-button>
        </t-button-group>

    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {},
        data() {
            return {
                loading1: false
            }
        }
    }
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    #app {
        margin: 20px;
    }
    .row {
        margin-bottom: 20px;
        .t-button {
            margin-right: 20px;
        }
    }
</style>
