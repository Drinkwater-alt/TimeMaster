<template>
    <div>
        <canvas id="clock" style="display: block; margin: 0 auto;float:left"> </canvas>

    </div>
</template>

<script>
export default {
    name: "clock",
    props: ["set", "now", "size"],
    data: function () {
        return {
            clock: "",
            ctx: "",
            x: "",
            r: "",
        };
    },
    methods: {
        draw: function () {
            // 圆环初始位置
            let start = -0.5;
            // 计算百分比
            let current = this.now / this.set;

            //背景圆环
            this.ctx.beginPath();
            this.ctx.arc(this.x, this.x, this.r - 7, 0, 2 * Math.PI);
            this.ctx.lineWidth = 7; //线条宽度
            this.ctx.strokeStyle = "rgb(225,226,240)"; //线条颜色
            this.ctx.stroke(); //画线条
            this.ctx.closePath();
            // 绘制百分比圆弧
            this.ctx.beginPath();
            this.ctx.arc(
                this.x,
                this.x,
                this.r - 7,
                start * Math.PI,
                (current * 2 + start) * Math.PI
            );
            this.ctx.lineWidth = 7;
            this.ctx.strokeStyle = "rgb(55,87,247)";
            this.ctx.stroke();
            this.ctx.closePath();

            console.log("绘制完成");
        },
    },
    mounted: function () {
        this.clock = document.getElementById("clock");
        console.log(this.clock);
        this.ctx = this.clock.getContext("2d");
        //处理默认大小
        if (this.size) {
            this.x = this.size;
            // console.log(this.size);
        } else {
            this.size = 200;
        }
        this.r = this.size;

        // 设置set now 默认大小
        if (!this.set) {
            this.set = 100;
        }
        console.log(this.set);
        if (!this.now) {
            this.now = 0;
        }
        console.log(this.now);
        setTimeout(() => {
            this.draw();
        }, 100);
    },
};
</script>
<style lang="less" scoped>
</style>