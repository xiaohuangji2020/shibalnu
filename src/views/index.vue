<template>
    <div class="index">
        <header class="header">
            <div class="logo">shibalnu</div>
            <my-nav></my-nav>
        </header>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import myNav from '@/components/common/nav.vue';

@Component({
    components: {
        myNav
    }
})
export default class Index extends Vue {}
</script>

<style lang="less" scoped>
.index {
    height: 100vh;
    position: relative;
    background: @bg-light;
}
.header {
    display: flex;
    height: 100px;
    line-height: 100px;
    .logo {
        width: 100px;
    }
}
</style>
