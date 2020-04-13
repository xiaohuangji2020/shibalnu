<template>
    <div class="text-logo">
        <div class="v-center">
            <div class="t">
                <span>北</span><span>方</span>
                <br />
                <span>优</span><span>柴</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TheTextLogo extends Vue {}
</script>

<style lang="less" scoped>
.text-logo {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100px;

    .v-center {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-55%);
    }

    .t {
        line-height: 1;
        font-size: 34px;
        font-family: BaoTuXiaoBaiTi;

        span {
            display: inline-block;
            padding: 5px;
            animation: tada 10s infinite;

            &:nth-of-type(4n) {
                animation-delay: 6s;
            }
            &:nth-of-type(4n + 1) {
                animation-delay: 0s;
            }
            &:nth-of-type(4n + 2) {
                animation-delay: 2s;
            }
            &:nth-of-type(4n + 3) {
                animation-delay: 4s;
            }
        }
    }
}
</style>
