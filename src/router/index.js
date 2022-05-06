import Vue from 'vue'
import VueRouter from 'vue-router'

import Pomodoro from '../views/Pomodoro'
import Ding from '../views/Ding'
import ToDoList from '../views/ToDoList'

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
    }

]

const router = new VueRouter({
    routes
})

export default router
