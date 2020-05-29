import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index'
import mine from '@/pages/mine/mine'
import rigister from "@/pages/rigister/rigister"


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/index',
            name: 'index',
            component: index
        },
        {
            path: '/mine',
            name: 'mine',
            component: mine
        },
        {
            path: '/rigister',
            name: 'rigister',
            component: rigister
        }
    ]
})
