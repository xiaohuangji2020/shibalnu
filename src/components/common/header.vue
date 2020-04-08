<template>
    <header class="header fixed">
        <div class="logo">shibalnu</div>
        <my-nav></my-nav>
    </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import myNav from '@/components/common/nav.vue';

@Component({
    components: {
        myNav
    }
})
export default class Header extends Vue {}
</script>

<style lang="less" scoped>
.header {
    display: flex;
    width: 100%;
    height: 100px;
    line-height: 100px;

    &.fixed {
        position: fixed;
        z-index: 50;
        top: 0;
        background: white;
        box-shadow: 0 8px 16px 0 rgba(64, 75, 91, 0.1);
    }
    .logo {
        width: 100px;
    }
}
</style>
