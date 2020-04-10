<template>
    <div class="index">
        <div class="bar">
            <span class="brand">北方优柴</span>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Index extends Vue {}
</script>

<style lang="less" scoped>
.index {
    height: 200vh;
    border-top: 1px solid transparent;
}
.bar {
    position: relative;
    z-index: 30;
    height: 300px;
    line-height: 300px;
    margin-top: calc(~'100vh - 300px');
    background: url('~@/assets/images/bg/bg-4.png') no-repeat;
    background-size: cover;
    background-attachment: fixed;
    text-align: center;

    .brand {
        display: block;
        color: white;
        font-size: 64px;
        font-weight: 500;
        letter-spacing: 25px;
        filter: drop-shadow(0 0 25px rgba(238, 77, 45, 0.8));
        text-shadow: rgba(238, 77, 45, 0.8) 0 0 10px;
    }
}
</style>
