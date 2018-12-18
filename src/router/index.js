import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '../pages/Login/Login.vue'
import Register from '../pages/Register/Register.vue'
import YZMLogin from '../pages/YZMLogin/YZMLogin.vue'
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import OrderAll from '../pages/Order/OrderAll/OrderAll.vue'
import OrderCancelled from '../pages/Order/OrderCancelled/OrderCancelled.vue'
import OrderNoUse from '../pages/Order/OrderNoUse/OrderNoUse.vue'
import OrderRefund from '../pages/Order/OrderRefund/OrderRefund.vue'
import OrderWaitPay from '../pages/Order/OrderWaitPay/OrderWaitPay.vue'
import Profile from '../pages/Profile/Profile.vue'
// 声明使用插件
Vue.use(Router)

export default new Router({
    // 去掉地址中的哈希#
    mode: 'history',
    routes: [{
            path: '/msite',
            component: MSite,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/search',
            component: Search,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/order',
            component: Order,
            meta: {
                showFooter: true
            },
            children: [{
                    path: '/order/orderall',
                    component: OrderAll,
                    meta: {
                        showFooter: true
                    },

                },
                {
                    path: '/order/ordercancelled',
                    component: OrderCancelled,
                    meta: {
                        showFooter: true
                    },
                },
                {
                    path: '/order/ordernouse',
                    component: OrderNoUse,
                    meta: {
                        showFooter: true
                    },
                },
                {
                    path: '/order/orderrefund',
                    component: OrderRefund,
                    meta: {
                        showFooter: true
                    },
                },
                {
                    path: '/order/orderwaitpay',
                    component: OrderWaitPay,
                    meta: {
                        showFooter: true
                    },
                },
                {
                    path: '',
                    redirect: '/order/orderall'
                },
            ]
        },
        {
            path: '/profile',
            component: Profile,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/yzmlogin',
            component: YZMLogin
        },
        {
            path: '/',
            redirect: '/msite'
        }
    ]
})