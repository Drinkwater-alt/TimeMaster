<template>
    <div>
        <div class="header">
            <span>Pomodoro</span>
            <!-- v-on:click="show" @click.stop="show" -->
            <label for="">
                <i
                    class="fa fa-ellipsis-v"
                    aria-hidden="true"
                    @click="isOpenDrawer = true"
                ></i>
            </label>
        </div>
        <Card class="body">
            <h4 class="title">专注</h4>

            <div>
                <canvas
                    id="clock"
                    style="display: block; margin: 0 auto"
                    width="600"
                    height="600"
                    ref="clock"
                >
                </canvas>
                <span>{{ showTime }}</span>
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
        <Drawer
            class="drawer"
            title="设置一个番茄时间"
            placement="bottom"
            :closable="false"
            v-model="isOpenDrawer"
            height="35"
        >
            <TimePicker
                format="HH:mm:ss"
                placeholder="Select time"
                style="width: 200px"
                :steps="[1, 5, 15]"
                v-model="noset"
            ></TimePicker>
            <i
                class="fa fa-paper-plane"
                aria-hidden="true"
                @click="addPlan"
            ></i>
        </Drawer>
    </div>
</template>

<script>
import Card from "../components/Card.vue";
import CountdownClock from "../components/CountdownClock.vue";
import audioMp3 from "../assets/audio/Ding.mp3";
export default {
    components: { Card, CountdownClock },
    data: function () {
        return {
            isOpenDrawer: false,
            noset: "00:25:00",
            //因为生命周期第一次compute的时候在dom生成之前，所以draw函数中无法获取canvase对象，所以第一次不执行函数
            dynamicFunction: function () {},
        };
    },
    methods: {
        startFx() {
            this.$store.commit("switchStart", false);
            this.$store.commit("switchProgress", true);
            this.countDown(true);
        },
        pauseFx() {
            this.$store.commit("switchProgress", false);
            this.$store.commit("switchPause", true);
            this.countDown(false);
        },
        continueFx() {
            this.$store.commit("switchPause", false);
            this.$store.commit("switchProgress", true);
            this.countDown(true);
        },
        endingFx() {
            this.$store.commit("switchPause", false);
            this.$store.commit("switchStart", true);
            this.countDown(false);
            this.$store.commit("setTime", this.set);
        },
        countDown(flag) {
            if (flag) {
                let interval = setInterval(() => {
                    this.$store.commit("countDown");
                    if (this.$store.state.countDownInfo.now <= 0) {
                        clearInterval(this.interval);
                        console.log(audioMp3);
                        window.Player.src = audioMp3;
                        window.Player.play();
                        // 切换按钮
                        this.$store.commit("switchProgress", false);
                        this.$store.commit("switchStart", true);
                        this.$store.commit("setTime", this.set);
                    }
                }, 1000);
                this.$store.commit("setCountDownInterval", interval);
            } else {
                clearInterval(this.interval);
            }
        },
        draw: function () {
            console.log("draw");
            const center = 300;
            const border = 10;
            const radius = 290;
            // 圆环初始位置
            const start = -0.5;
            // console.log(this.$refs);
            let ctx = this.$refs.clock.getContext("2d");
            // console.log(document.getElementById("clock"));

            // 计算百分比
            let current = (this.set - this.now) / this.set;

            //背景圆环
            ctx.beginPath();
            ctx.arc(center, center, radius - border, 0, 2 * Math.PI);
            ctx.lineWidth = border; //线条宽度
            ctx.strokeStyle = "rgb(225,226,240)"; //线条颜色
            ctx.stroke(); //画线条
            ctx.closePath();
            // 绘制百分比圆弧
            ctx.beginPath();
            ctx.arc(
                center,
                center,
                radius - border,
                start * Math.PI,
                (current * 2 + start) * Math.PI
            );
            ctx.lineWidth = 7;
            ctx.strokeStyle = "rgb(55,87,247)";
            ctx.stroke();
            ctx.closePath();
        },
        addPlan: function () {
            const saveNoset = this.noset;
            let str = this.noset.split(":");
            this.noset = saveNoset;
            console.log(this.noset);
            console.log(str);
            let h = str[0] - 0;
            let m = str[1] - 0;
            let s = str[2] - 0;
            let set = h * 60 * 60 + m * 60 + s;
            //设置时间进vuex
            this.$store.commit("setTime", set);
            this.isOpenDrawer = false;
            console.log(this.set);
        },
    },
    mounted() {
        this.draw();
        this.dynamicFunction = this.draw;
    },
    watch: {},
    computed: {
        showTime: function () {
            this.dynamicFunction();
            let m = Math.floor(this.now / 60);
            let s = this.now - m * 60;
            if (s < 10) {
                return m + ":0" + s;
            } else {
                return m + ":" + s;
            }
        },
        interval: function () {
            return this.$store.state.countDownInfo.interval;
        },
        set: function () {
            return this.$store.state.countDownInfo.set;
        },
        now: function () {
            return this.$store.state.countDownInfo.now;
        },
        start: function () {
            return this.$store.state.countDownInfo.start;
        },
        progress: function () {
            return this.$store.state.countDownInfo.progress;
        },
        pause: function () {
            return this.$store.state.countDownInfo.pause;
        },
    },
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
        margin-top: 1rem;
        width: 30rem;
        height: 7rem;
        display: block;
        margin: 2rem auto;
    }
    div {
        position: relative;
        h4 {
            color: #222;
            font-size: 16px;
            margin-bottom: 2rem;
            text-align: center;
        }
        canvas {
            width: 300px;
            height: 300px;
        }
        span {
            color: #222;
            font-size: 50px;
            position: absolute;
            display: block;
            left: 150px;
            top: 150px;
            transform: translate(-50%, -50%);
        }
    }
}
</style>