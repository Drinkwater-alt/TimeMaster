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
                <List v-bind:items="plan" @getIndex='achieve'>
                    <template v-slot:item="{ item }">
                        <div class="group-title">
                            <i class="fa fa-square-o"></i>
                            <span style="color: #333">{{ item.content }}</span>
                        </div>
                        <span class="date">{{ item.date }}</span>
                    </template>
                </List>
            </Card>
            <!-- 完成的列表 -->
            <Card class="completed" v-if="ShowCompletedPanel" v-show="isShowCompletedPanel">
                <template #header>
                    <span style="color: #111">已完成</span>
                </template>
                <List v-bind:items="completed" v-bind:aPadding="'3rem 1rem'" @getIndex='shift'>
                    <template v-slot:item="{ item }">
                        <div class="group-title" >
                                <i class="fa fa-check-square-o" aria-hidden="true"></i>
                            <span style="color: #333">{{ item.content }}</span>
                        </div>
                        <span class="date">{{ item.date }}</span>
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
                        <span>排序</span>
                    </div>
                </div>
            </Card>
        </div>

        <!-- 添加时候的抽屉 -->
        <Drawer class="drawer" title="添加一个计划吧" placement="bottom" :closable="false" v-model="isOpenDrawer" height='15'>

            <input type="text" class="input" placeholder="准备做什么?"><i class="fa fa-paper-plane" aria-hidden="true"></i>

            
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
import CheckBox from "../components/CheckBox.vue";
export default {
    components: { AddButton, List, Card, CheckBox },
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
        };
    },
    methods: {
        hidden: function () {
            this.isShowAddition = false;
        },
        show: function () {
            this.isShowAddition = true;
        },
        achieve: function (index) {
            console.log(index);
            // this.plan[index].date 今日完成时间
            this.completed.unshift(this.plan[index]);
            this.plan.splice(index, 1);
        },
        shift: function (index) {
            console.log(index);
            // this.plan[index].date 今日完成时间
            this.plan.unshift(this.completed[index]);
            this.completed.splice(index, 1);
        },
        hideCompletedPanel: function () {
            this.isShowCompletedPanel = !this.isShowCompletedPanel;
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
    right: 0.5rem;
    bottom: 0.3rem;
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
    .group-title {
        // display: flex;
        padding: @aPadding-tb*1rem @aPadding-lr*1rem;
    }
    .date {
        font-size: 1rem;
    }
    span {
        font-size: 2rem;
        line-height: 2rem;
        margin-left: 2rem;
        padding: @aPadding-tb*1rem @aPadding-lr*1rem;
    }
}
.completed {
    margin-top: 2rem;
}
.addition {
    width: 27rem;
    background-color: white;
    position: absolute;
    top: 2rem;
    right: 1rem;
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
        border:#fff;
        width: 40rem;
        & + i {
            color: #74b9ff;
            font-size: 3rem;
            margin-right: 3rem;
            text-align: right;
        }
    }
}
</style>