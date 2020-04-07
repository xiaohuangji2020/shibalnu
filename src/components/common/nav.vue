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
export default class MyNav extends Vue {
    private navList = [
        {
            path: '/',
            name: '首页'
        },
        {
            path: '/buy',
            name: '购买'
        },
        {
            path: '/pic',
            name: '晒一晒'
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
}
</style>
