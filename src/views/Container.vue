<style scoped>
.container {
    height: 100vh;
    background-color: rgb(239, 244, 255);
}
.router {
    height: 92%;
    width: 94%;
    padding: 1rem;
    padding-top: 2rem;
    margin: 0 auto;
}
.navbar {
    width: 100%;
    height: 8%;
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
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
    will-change: transform;
    transition: all 800ms;
    position: absolute;
}

.slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}
.router-link-active {
    color: rgb(55, 88, 247);
}
</style>

<template>
    <div class="container">
        
        <router-view class="router" />
        <div class="navbar">
            <div class="nav">
                <router-link
                    :to="'/todolist'"
                    style="font-size: 1.24em"
                    class="bar"
                    tag="div"
                >
                    <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                </router-link>
                <router-link :to="'/pomodoro'" class="bar" tag="div">
                    <i class="fa fa-bullseye" aria-hidden="true"></i>
                </router-link>
                <router-link :to="'/ding'" class="bar" tag="div">
                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                </router-link>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            animate: "",
        };
    },

    methods: {},
    watch: {
        $route(to, from) {
            //可以打印一下to 和 from 来看一下他们里面meta设置的index层级
            console.log(to, from);
            //判断进入的路由层级是否比要进入的路由层级大
            if (to.meta.index > from.meta.index) {
                //设置动画名称
                this.animate = "slide-left";
            } else {
                this.animate = "slide-right";
            }
        },
    },
};
</script>



