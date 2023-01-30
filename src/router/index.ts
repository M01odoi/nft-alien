import {createRouter, createWebHistory, RouteRecordRaw, useRoute, useRouter,} from 'vue-router'

import {ROUTE_NAMES} from '@/enums'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/:catchAll(.*)',
        redirect: { name: ROUTE_NAMES.home }
    },
    {
        path: '/',
        name: ROUTE_NAMES.home,
        component: () => import('@/vue/pages/HomePage.vue'),
        beforeEnter: authPageGuard
    },
    {
        path: '/auth',
        name: ROUTE_NAMES.auth,
        component: () => import('@/vue/pages/Auth.vue'),
        beforeEnter: function (to, from, next) {
            const isLoggedIn = window.ethereum?.selectedAddress
            if (isLoggedIn) {
                next({name: ROUTE_NAMES.home})
            } else {
                next()
            }
        }
    },
    {
        path: '/mint',
        name: ROUTE_NAMES.mint,
        component: () => import('@/vue/pages/MintPage.vue'),
        beforeEnter: authPageGuard
    },
    {
        path: '/transfer',
        name: ROUTE_NAMES.transfer,
        component: () => import('@/vue/pages/TransferPage.vue'),
        beforeEnter: authPageGuard
    }
]
function authPageGuard (to: any, from: any, next: any) {
    const isLoggedIn = window.ethereum?.selectedAddress
    if (isLoggedIn) {
        next()
    }
    else{
        next({name: ROUTE_NAMES.auth})
    }
}
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior: () => ({ top: 0, left: 0 }),
})

export { router, useRouter, useRoute }
