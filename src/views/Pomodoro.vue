<template>
    <div>
        <div class="header">
            <span>Pomodoro</span>
            <!-- v-on:click="show" @click.stop="show" -->
            <label for="">
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            </label>
        </div>
        <Card class="body">
            <span class="title">专注</span>

            <div>
                <countdown-clock
                    width="280"
                    height="280"
                    v-bind:size="140"
                    :set="200"
                    :now="100"
                ></countdown-clock>
            </div>
            <Button
                class="button"
                type="primary"
                shape="circle"
                v-if="start"
                @click="startFx"
                >开始</Button
            >
            <Button
                class="button"
                type="primary"
                shape="circle"
                v-if="pause"
                @click="continueFx"
                >继续</Button
            >
            <Button
                class="button"
                type="default"
                shape="circle"
                v-if="progress"
                @click="pauseFx"
                >暂停</Button
            >
            <Button
                class="button"
                type="default"
                shape="circle"
                v-if="pause"
                @click="endingFx"
                >结束</Button
            >
        </Card>
    </div>
</template>

<script>
import Card from "../components/Card.vue";
import CountdownClock from "../components/CountdownClock.vue";
export default {
    components: { Card, CountdownClock },
    data: function () {
        return {
            start: true,
            progress: false,
            pause: false,
        };
    },
    methods: {
        startFx() {
            this.start = false;
            this.progress = true;
        },
        pauseFx() {
            this.progress = false;
            this.pause = true;
        },
        continueFx() {
            this.pause = false;
            this.progress = true;
        },
        endingFx() {
            this.pause = false;
            this.start = true;
        },
    }
};
</script>

<style lang="less" scoped>
.header {
    color: #222;
    padding: 1rem 0.5rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    i {
        font-size: 3rem;
    }
}
.body {
    box-shadow: none;
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 14rem;
    .title {
        display: block;
        text-align: center;
        margin-bottom: 7rem;
        & + div {
            margin-bottom: 8rem;
        }
    }
    .button {
        width: 30rem;
        height: 7rem;
        display: block;
        margin: 2rem auto;
    }
}
</style>