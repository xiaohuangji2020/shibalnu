import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
import index from '../views/index.vue';
import otherRouter from './routerOpt';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
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
