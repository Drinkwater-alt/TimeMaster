<style scoped>
#app {
    height: 100vh;
    background-color: rgb(239, 244, 255);
}
.container{
    width: 100%;
    height: 100%;
}
</style>

<template>
    <div id="app">
        <router-view class="container" />
    </div>
</template>

<script>
export default {
    name: "app",
};
</script>



