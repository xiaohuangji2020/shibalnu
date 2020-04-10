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
    }
];

export default router;
