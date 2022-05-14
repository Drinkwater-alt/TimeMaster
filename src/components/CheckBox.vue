<template>
        <i
            class="fa"
            v-bind:class="{ 'fa-square-o': check, 'fa-check-square-o': !check }"
            aria-hidden="true"
            v-on:click="change"
        ></i>
</template>

<script>
export default {
    // props:['check'],
    data: function () {
        return {
            check: true,
        };
    },

    methods: {
        change: function () {
            // console.log(123);
            this.check = !this.check;
        },
    },
};
</script>

<style lang="less" scoped>
</style>