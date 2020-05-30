import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index'
import mine from '@/pages/mine/mine'
import rigister from "@/pages/mine/rigister"
import classify from "@/pages/classify/classify"
import detail from "@/pages/detail/detail"
import order from "@/pages/detail/order"
import ensure from "@/pages/detail/ensure"
import pay from "@/pages/detail/pay"
import cart from "@/pages/cart/cart"


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
            path: '/detail/pay',
            name: 'pay',
            component: pay
        },
        {
            path: '/cart',
            name: 'cart',
            component: cart
        }
    ]
})
