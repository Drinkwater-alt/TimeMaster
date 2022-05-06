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
    background-color: rgb(26, 181, 224);
    margin-left: 1.5em;
    margin-right: 1.5em;
}
</style>

<template>
    <div id="app">
        <router-view class="container" />
        <div class="navbar">
            <div class="nav">
                <div class="bar" @click="navigateTo('/todolist')">1</div>
                <div class="bar" @click="navigateTo('/pomodoro')">2</div>
                <div class="bar" @click="navigateTo('/ding')">2</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "app",
    methods: {
        navigateTo: function (url) {
            this.$router.replace(url);
        },
    },
};
</script>



