import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../views/Index.vue';
import otherRouter from './routerOpt';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'index',
        component: index
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.addRoutes(otherRouter);

export default router;
