const router = [
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: 'about' */ '@/views/about/Index.vue')
    },
    {
        path: '/show',
        name: 'show',
        component: () => import(/* webpackChunkName: 'about' */ '@/views/show/Index.vue')
    },
    {
        path: '/dogs',
        name: 'dogs',
        component: () => import(/* webpackChunkName: 'about' */ '@/views/dogs/Index.vue')
    }
];

export default router;
