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
}
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 80%;
    margin: auto;
}
.bar {
    width: 1.5em;
    height: 1.5em;
    color: rgb(152, 152, 156);
    font-size: 1.4em;
    text-align: center;
}
.router-link-active {
    color: rgb(55, 88, 247);
    
}
</style>

<template>
    <div id="app">
        <router-view class="container" />
        <div class="navbar">
            <div class="nav">
                <!-- <label for="" class="bar" @click="toTodolist">
                    <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                </label>
                <label for="" class="bar" @click="toPomodoro">
                    <i class="fa fa-bullseye" aria-hidden="true"></i>
                </label>

                <label for="" class="bar" @click="toDing">
                    <i class="fa fa-cube bar" aria-hidden="true"></i>
                </label> -->
                <router-link :to="'/todolist'" style="font-size:1.24em" class="bar" tag="div">
                    <i class="fa fa-calendar-check-o"  aria-hidden="true"></i>
                </router-link>
                <router-link :to="'/pomodoro'" class="bar" tag="div">
                    <i class="fa fa-bullseye"  aria-hidden="true"></i>
                </router-link>
                <router-link :to="'/ding'" class="bar" tag="div">
                    <i class="fa fa-clock-o"  aria-hidden="true"></i>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "app",
    // data() {
    //     return {
    //         old: null,
    //         current: null,
    //     };
    // },
    // mounted: function () {
    //     this.current = document.getElementsByClassName("fa fa-cube")[0];
    // },
    // methods: {
    //     navigateTo: function (element, url) {
    //         if (this.changeCurrent(element)) this.$router.push({ path: url });
    //     },
    //     changeCurrent: function (element) {
    //         console.log(element);
    //         console.log(this.current);
    //         if (this.current == element) return false;
    //         this.old = this.current;
    //         this.current = element;
    //         return true;
    //     },
    //     toDing: function (e) {
    //         // console.log(e)
    //         this.navigateTo(e.target, "/ding");
    //     },
    //     toPomodoro: function (e) {
    //         this.navigateTo(e.target, "/pomodoro");
    //     },
    //     toTodolist: function (e) {
    //         this.navigateTo(e.target, "/todolist");
    //     },
    // },
    // watch: {
    //     current: function () {
    //         // console.log(this.current)
    //         this.current.style.color = "rgb(55,88,247)";
    //         if (this.old) {
    //             this.old.style.color = "rgb(152, 152, 156)";
    //         }
    //     },
    // },
};
</script>



