<template>
    <transition-group name="list" tag="ul" class="list-group">
        <li
            v-for="(item, index) in items"
            v-bind:key="item"
            @click="pushIndex(index)"
        >
            <slot name="item" v-bind:item="item">
                {{ item }}
            </slot>
        </li>
    </transition-group>
</template>

<script>
export default {
    props: ["items"],
    methods: {
        pushIndex(index) {
            this.$emit("getIndex", index);
        },
    },
};
</script>

<style lang="less" scoped>
.list-group {
    li {
        display: flex;
        justify-content: space-between;
        padding: 0.8rem 0;
        // border-bottom: solid 1px #ddd;
        font-size: 0.8rem;
        &:last-child {
            border-bottom: none;
        }
    }
    .list-enter-active,
    .list-leave-active {
        transition: all .5s;
    }
    .list-enter,
    .list-leave-active {
        opacity: 0;
        transform: translateX(30px);
    }
}
</style>