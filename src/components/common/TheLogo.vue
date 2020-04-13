<template>
    <div class="logo">
        <!-- <span class="t-1">北方</span>
        <span class="t-2">优柴</span> -->
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TheLogo extends Vue {}
</script>

<style lang="less" scoped>
.logo {
    position: relative;
    width: 120px;
    background: url('~@/assets/images/shibalnu/logo-4.jpg') no-repeat;
    background-size: cover;
    background-position: center;

    span {
        position: absolute;
        line-height: 1;
        font-family: BaoTuXiaoBaiTi;
    }

    .t-1 {
        bottom: 0;
        left: 0;
        animation: tada 10s infinite;
    }

    .t-2 {
        right: 0;
        bottom: 0;
        animation: my-tada 10s infinite;
        animation-delay: 2s;
    }
}
</style>
