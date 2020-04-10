<template>
    <header class="header fixed">
        <the-logo></the-logo>
        <the-nav></the-nav>
    </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TheLogo from '@/components/common/TheLogo.vue';
import TheNav from '@/components/common/TheNav.vue';

@Component({
    components: {
        TheLogo,
        TheNav
    }
})
export default class TheHeader extends Vue {}
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
}
</style>
