import Vue from 'vue'
import VueRouter from 'vue-router'

import Pomodoro from '../views/Pomodoro'
import Ding from '../views/Ding'
import ToDoList from '../views/ToDoList'
import InsertDailyItem from '../views/InsertDailyItem.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Ding
    },
    {
        path: '/todolist',
        component: ToDoList
    }, 
    {
        path: '/pomodoro',
        component:Pomodoro
    }, {
        path: '/ding',
        component:Ding
    },
    {
        path: '/insertDailyItem',
        component:InsertDailyItem
    }

]

const router = new VueRouter({
    routes
})

export default router
