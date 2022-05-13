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
                        <span style="color: #555">{{ item.content }}</span>
                        <span>{{ item.date }}</span>
                    </template>
                </List>
            </Card>
            <Card class="completed">
                <List v-bind:items="completed">
                    <template v-slot:item="{ item }">
                        <span style="color: #555">{{ item.content }}</span>
                        <span>{{ item.date }}</span>
                    </template>
                </List>
            </Card>
        </div>
    </div>
</template>

<script>
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
                {
                    content: "123",
                    date: "2022-5-13",
                },
            ],
            completed:[
                {
                    content: "窟窿",
                    date: "2022-5-13",
                },
                {
                    content: "123",
                    date: "2022-5-13",
                },
            ]
        };
    },
};
</script>

<style scoped>
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
    /* line-height: .5rem; */
}
.body {
    padding: 0.5rem 2rem;
}
.completed,
.completing {
    background-color: white;
    border-radius: 1rem;
    border: none;
}
.completed {
    margin-top: 2rem;
}
</style>