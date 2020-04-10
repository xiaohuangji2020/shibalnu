const router = [
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: 'about' */ '@/views/about/Index.vue')
    }
];

export default router;
