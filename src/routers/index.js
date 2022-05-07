import Vue from 'vue'
import VueRouter from 'vue-router'

import Pomodoro from '../views/Pomodoro'
import Ding from '../views/Ding'
import ToDoList from '../views/ToDoList'
import InsertDailyItem from '../views/InsertDailyItem.vue'
import Container from '../views/Container'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Container,
        redirect:'/ding',
        children: [
            {
                path: '/todolist',
                component: ToDoList,
                meta: {
                    index:1
                }
            }, 
            {
                path: '/pomodoro',
                component: Pomodoro,
                meta: {
                    index:2
                }
            }, {
                path: '/ding',
                component: Ding,
                meta: {
                    index:3
                }
            },
        ]
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
