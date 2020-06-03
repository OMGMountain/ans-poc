import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index'
import mine from '@/pages/mine/mine'
import rigister from "@/pages/mine/rigister"
import login from "@/pages/mine/login"
import classify from "@/pages/classify/classify"
import detail from "@/pages/detail/detail"
import order from "@/pages/detail/order"
import ensure from "@/pages/detail/ensure"
import transfer from "@/pages/detail/transfer"
import cart from "@/pages/cart/cart"
import setsdk from "@/pages/mine/setSDK"
import pay from "@/pages/cart/pay"




Vue.use(Router)


export default new Router({
    routes: [
        {
            path: '/',
            redirect: { name: "index" }
        },
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
            path: '/cart',
            name: 'cart',
            component: cart
        },
        {
            path: '/cart/pay',
            name: 'pay',
            component: pay
        },
        {
            path: '/mine/rigister',
            name: 'rigister',
            component: rigister
        },
        {
            path: '/mine/login',
            name: 'login',
            component: login
        },
        {
            path: '/classify',
            name: 'classify',
            component: classify
        },
        {
            path: '/detail',
            name: 'detail',
            component: detail
        },
        {
            path: '/detail/order',
            name: 'order',
            component: order
        },
        {
            path: '/detail/order/ensure',
            name: 'ensure',
            component: ensure
        },
        {
            path: '/detail/transfer',
            name: 'transfer',
            component: transfer
        },
        {
            path: '/mine/setsdk',
            name: 'setsdk',
            component: setsdk
        }
    ]
})

// console.log("3333", location.href)

// router.beforeEach((to, from, next) => {
//     console.log(from)
//     next()
// })

//  router
