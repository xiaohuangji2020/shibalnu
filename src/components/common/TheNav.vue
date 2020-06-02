<template>
    <nav class="nav">
        <router-link v-for="(item, index) of navList" :to="item.path" :key="index" class="item">
            {{ item.name }}
        </router-link>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class TheNav extends Vue {
    private navList = [
        {
            path: '/index',
            name: '首页'
        },
        {
            path: '/for-sale',
            name: '在售幼犬'
        },
        {
            path: '/dogs',
            name: '种犬介绍'
        },
        {
            path: '/show',
            name: '买家秀'
        },
        {
            path: '/about',
            name: '关于我们'
        },
        {
            path: '/cku',
            name: 'CKU注册详情'
        }
    ];
}
</script>

<style lang="less" scoped>
.nav {
    display: flex;
    height: 100px;
    .item {
        margin-left: 48px;
        color: @text-color;
        opacity: 0.7;

        &:hover {
            opacity: 1;
        }
    }
    .router-link-active {
        font-weight: 500;
        opacity: 1;
    }
}
</style>
