<template>
    <div v-on:click="hidden">
        <add-button class="addbutton"></add-button>
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
            <Card class="completing">
                <List v-bind:items="plan">
                    <template v-slot:item="{ item }">
                        <div class="group-title">
                            <CheckBox></CheckBox>
                            <span style="color: #333">{{ item.content }}</span>
                        </div>
                        <span class="date">{{ item.date }}</span>
                    </template>
                </List>
            </Card>
            <!-- 完成的列表 -->
            <Card class="completed">
                <template #header>
                    <span style="color: #111">已完成</span>
                </template>
                <List v-bind:items="completed" v-bind:aPadding="'3rem 1rem'">
                    <template v-slot:item="{ item }">
                        <div class="group-title" >
                            <CheckBox></CheckBox>
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
                <div class="option">
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
        
        
        
    </div>
</template>

<script>
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
                {
                    content: "123",
                    date: "2022-5-13",
                },
                {
                    content: "123",
                    date: "2022-5-13",
                },
                {
                    content: "123",
                    date: "2022-5-13",
                },
                {
                    content: "123",
                    date: "2022-5-13",
                },
            ],
            completed: [
                {
                    content: "窟窿",
                    date: "2022-5-13",
                },
                {
                    content: "123",
                    date: "2022-5-13",
                },
            ],
            isShowAddition: false,
        };
    },
    methods: {
        hidden: function () {
            this.isShowAddition = false;
        },
        show: function () {
            console.log(123);
            this.isShowAddition = true;
        },
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
        font-size: 2.7rem;
        line-height: 5rem;
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
</style>