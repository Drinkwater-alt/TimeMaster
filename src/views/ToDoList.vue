<template>
    <div v-on:click="hidden">
        <!-- 头部 -->
        <div class="header">
            <span>TODOLIST</span>
            <label for="" v-on:click="show" @click.stop="show"> 
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            </label>
        </div>
        <!-- 主体 -->
        <div class="body">
            <!-- 未完成的列表 -->
            <Card class="completing" v-if="ShowCompletingPanel">
                <List v-bind:items="plan">
                    <template v-slot:item="{ item }">
                        <div style="overflow:hidden;width:100%;display:flex">
                            <div class="group" :ref="item.id" @touchstart='touchstart' @touchmove='touchmove' @touchend='touchend(item.id)'  >
                                <div class="title">
                                    <i class="fa fa-square-o" @click='achieve(item.id)'></i>
                                    <span style="color: #333">{{ item.content }}</span>
                                </div>
                                <span class="date">{{ item.date }}</span>
                            </div>
                            <i class="fa fa-trash deleteButton" aria-hidden="true" @click="removePlan(item.id)"></i>
                        </div>
                        
                    </template>
                </List>
            </Card>
            <!-- 完成的列表 -->
            <Card class="completed" v-if="ShowCompletedPanel" v-show="isShowCompletedPanel">
                <template #header>
                    <span style="color: #111">已完成</span>
                </template>
                <List v-bind:items="completed" v-bind:aPadding="'3rem 1rem'">
                    <template v-slot:item="{ item }">
                        <div style="overflow:hidden;width:100%;display:flex">
                            <div class="group" :ref="item.id" @touchstart='touchstart' @touchmove='touchmove' @touchend='touchend(item.id)'  >
                                <div class="title">
                                    <i class="fa fa-check-square-o" @click="shift(item.id)"></i>
                                    <span style="color: #333">{{ item.content }}</span>
                                </div>
                                <span class="date">{{ item.date }}</span>
                            </div>
                            <i class="fa fa-trash deleteButton" aria-hidden="true" @click="removeCompleted(item.id)"></i>
                        </div>

                    </template>
                </List>
            </Card>
        </div>
        <!-- addition -->
        <div>
            <Card class="addition"  v-if="isShowAddition" >
                <div class="options">
                    <div class="option" @click="hideCompletedPanel">
                        <i class="fa fa-list-alt" aria-hidden="true"></i>
                        <span>隐藏已完成</span>
                    </div>
                    <div class="option">
                        <i class="fa fa-sort-amount-asc" aria-hidden="true"></i></i>
                        <span>删除</span>
                    </div>
                </div>
            </Card>
        </div>

        <!-- 添加时候的抽屉 -->
        <Drawer class="drawer" title="添加一个计划吧" placement="bottom" :closable="false" v-model="isOpenDrawer" height='150'>

            <input type="text" class="input" placeholder="准备做什么?" ref='plan'>
            <i class="fa fa-paper-plane" aria-hidden="true" @click="addPlan"></i>

            
        </Drawer>
                <!-- 添加按钮 -->
        <AddButton class="addbutton" @click.native="isOpenDrawer = true"></AddButton>
        
    </div>
</template>

<script>
import DataBase from "../data/data";
import AddButton from "../components/AddButton.vue";
import List from "../components/List.vue";
import Card from "../components/Card.vue";

export default {
    components: { AddButton, List, Card },
    data() {
        return {
            plan: [
                {
                    content: "窟窿",
                    date: "2022-5-13",
                },
            ],
            completed: [
                {
                    content: "窟窿",
                    date: "2022-5-13",
                },
            ],
            isShowAddition: false,
            isShowCompletedPanel: true,
            isOpenDrawer: false,
            value3: false,
            isMoveLeft: false,
        };
    },
    methods: {
        hidden: function () {
            this.isShowAddition = false;
        },
        show: function () {
            this.isShowAddition = true;
        },
        achieve: function (v) {
            console.log(v);
            // this.plan[index].date 今日完成时间
            let index = this.plan.indexOf(
                this.plan.find((item) => {
                    return item.id == v;
                })
            );
            console.log("下标" + index + "的元素转移到completed");
            this.completed.unshift(this.plan[index]);
            this.plan.splice(index, 1);
        },
        shift: function (v) {
            // this.plan[index].date 今日完成时间
            let index = this.completed.indexOf(
                this.completed.find((item) => {
                    return item.id == v;
                })
            );
            console.log("下标" + index + "的元素转移到plan");
            this.plan.unshift(this.completed[index]);
            this.completed.splice(index, 1);
        },
        hideCompletedPanel: function () {
            this.isShowCompletedPanel = !this.isShowCompletedPanel;
        },
        addPlan: function () {
            let input = this.$refs.plan;
            console.log(input);
            // 如果空就不添加进去
            if (input.value == "") {
                return;
            }
            let plan = {
                // 接入后端后，就不需要这个了
                id: new Date().valueOf(),
                content: input.value,
                date: Date.format("yyyy-mm-dd", new Date()),
            };
            console.log(Date.format("yyyy-mm-dd", new Date()));
            this.plan.unshift(plan);

            //清空输入框
            input.value = "";
            this.isOpenDrawer = false;
        },
        touchstart(e) {
            this.startX = e.touches[0].clientX;
            this.startY = e.touches[0].clientY;
        },
        touchmove(e) {
            this.moveX = e.touches[0].clientX;
            this.moveY = e.touches[0].clientY;
            this.startX - this.moveX <= 0
                ? (this.slideRight = true)
                : (this.slideRight = false);
        },
        touchend(e) {
            // 左右移动的事件
            if (this.slideRight == null||this.slideRight) {
                console.log("左移动");
                this.$refs[e].style.marginLeft = "";
            } else {
                console.log("右移动");
                this.$refs[e].style.marginLeft = "-10rem";
            }

            //结束处理
            this.slideRight = null;
        },
        removePlan(id) {
            this.$refs[id].style.marginLeft=""
            let index = this.plan.indexOf(
                this.plan.find((item) => {
                    return item.id == id;
                })
            );
            if (this.plan != -1) {
                this.plan.splice(index, 1);
                console.log(index + "移除");
            }
        },
        removeCompleted(id) {
            this.$refs[id].style.marginLeft=""
            let index = this.completed.indexOf(
                this.completed.find((item) => {
                    return item.id == id;
                })
            );
            if (index != -1) {
                this.completed.splice(index, 1);
                console.log(index + "移除");
            }
        },
    },
    computed: {
        ShowCompletingPanel: function () {
            if (this.plan.length == 0) return false;
            return true;
        },
        ShowCompletedPanel: function () {
            if (this.completed.length == 0) return false;
            return true;
        },
    },
    mounted: function () {
        console.log(DataBase.plan);
        this.plan = DataBase.plan;
        this.completed = DataBase.completed;
    },
};
</script>

<style lang="less" scoped>
.addbutton {
    position: absolute;
    right: 2rem;
    bottom: 10rem;
}
.header {
    color: #222;
    padding: 1rem 0.5rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
}
.header i {
    font-size: 3rem;
}
.body {
    padding: 0.5rem 0.5rem;
    overflow: scroll;
    height: 92%;
}
.completed,
.completing {
    background-color: white;
    border-radius: 1rem;
    border: none;
    padding: 1rem 1.5rem;
    li {
        padding: 1rem !important;
    }
    @aPadding-tb: 1;
    @aPadding-lr: 1;
    .group {
        width: 100%;
        padding-top: 1rem;
        padding-bottom: 1rem;
        display: flex;
        justify-content: space-between;
        transition: margin .3s;
        .title {
            display: flex;
            i {
                line-height: 4rem;
            }
            span {
                font-size: 2rem;
                line-height: 2rem;
                margin-left: 2rem;
                padding: @aPadding-tb*1rem @aPadding-lr*1rem;
            }
        }
        .date {
            font-size: 2rem;
            line-height: 3.6rem;
        }
    }
    .deleteButton {
        // display: inline-block;
        margin-right: -10rem;
        margin-left: 5rem;
        color: #d63031;
        line-height: 5rem;
        text-align: center;
        font-size: 3rem;
    }
}
.completed {
    margin-top: 2rem;
}
.addition {
    width: 25rem;
    background-color: white;
    position: absolute;
    top: 0rem;
    right: 0rem;
}
.options {
    padding: 0.5rem;
    .option {
        padding: 1rem;
        @font: 2;
        font-size: @font*1rem;
        span {
            font-size: @font*1rem;
            margin-left: 1rem;
        }
        i {
            padding: 0.5rem;
            text-align: center;
        }
    }
}
.drawer {
    text-align: justify;
    .input {
        border: #fff;
        width: 85%;
        & + i {
            color: #74b9ff;
            font-size: 3rem;
            margin-left: 3rem;
            text-align: right;
        }
    }
}
</style>