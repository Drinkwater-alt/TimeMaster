<style scoped>
#app {
    height: 100vh;
    background-color: rgb(239, 244, 255);
}
.container {
    position: absolute;
    top: 2%;
    height: 90%;
    /* 辅助样例 */
    /* border: 1px solid black; */
    width: 94%;
    margin-left: 3%;
}
.navbar {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2.8em;
    display: flex;
    justify-content: center;
}
.nav {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 88%;
    height: 100%;
}
.bar {
    width: 1.5em;
    height: 1.5em;
    margin-left: 2em;
    margin-right: 2em;
}
.bar i {
    font-size: 1.3em;
    color: rgb(152, 152, 156);
}
</style>

<template>
    <div id="app">
        <router-view class="container" />
        <div class="navbar">
            <div class="nav">
                <div class="bar" @click="toTodolist">
                    <label for="">
                        <i
                            class="fa fa-calendar-check-o"
                            aria-hidden="true"
                        ></i>
                    </label>
                </div>
                <div class="bar" @click="toPomodoro">
                    <label for="">
                        <i class="fa fa-bullseye" aria-hidden="true"></i>
                    </label>
                </div>
                <div class="bar" @click="toDing">
                    <label for="">
                        <i class="fa fa-cube" aria-hidden="true"></i>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "app",
    data() {
        return {
            old: null,
            current: null,
        };
    },
    mounted: function () {
        this.current = document.getElementsByClassName("fa fa-cube")[0];
    },
    methods: {
        navigateTo: function (url) {
            this.$router.replace(url);
        },
        changeCurrent: function (e) {
            this.old = this.current;
            this.current = e.target;
        },
        toDing: function (e) {
            // console.log(e)
            this.changeCurrent(e);
            this.$router.replace("/ding");
        },
        toPomodoro: function (e) {
            this.changeCurrent(e);
            this.$router.replace("/pomodoro");
        },
        toTodolist: function (e) {
            this.changeCurrent(e);
            this.$router.replace("/todolist");
        },
    },
    watch: {
        current: function () {
            // console.log(this.current)
            this.current.style.color = "rgb(55,88,247)";
            if (this.old) {
                this.old.style.color = "rgb(152, 152, 156)";
            }
        },
    },
};
</script>



