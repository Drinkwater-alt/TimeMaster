<template>
    <div>
        <add-button class="addbutton"></add-button>
        <div class="header">
            <span>TODOLIST</span>
            <label for="">
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            </label>
        </div>
        <div class="body">
            <Card class="completing">
                <List v-bind:items="plan">
                    <template v-slot:item="{ item }">
                        <div style="display: flex">
                            <CheckBox></CheckBox>
                            <span style="color: #333">{{ item.content }}</span>
                        </div>
                        <span>{{ item.date }}</span>
                    </template>
                </List>
            </Card>
            <Card class="completed">
                <template #header>
                    <span style="color: #111">已完成</span>
                </template>
                <List v-bind:items="completed">
                    <template v-slot:item="{ item }">
                        <div style="display: flex">
                            <CheckBox></CheckBox>
                            <span style="color: #333">{{ item.content }}</span>
                        </div>
                        <span>{{ item.date }}</span>
                    </template>
                </List>
            </Card>
        </div>
        <Card class="addition" v-on:blur="hidden" v-if="isShowAddition" v-on:click="show">
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
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
}
.header i {
    font-size: 3rem;
}
.body {
    padding: 0.5rem 2rem;
}
.completed,
.completing {
    background-color: white;
    border-radius: 1rem;
    border: none;
    padding: 1rem 1.5rem;
    span {
        font-size: 2.1rem;
        line-height: 3rem;
        margin-left: 1rem;
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
    padding: 1rem;
    .option {
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