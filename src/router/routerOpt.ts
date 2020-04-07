const router = [
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: 'about' */ '@/views/about/index.vue')
    }
];

export default router;
