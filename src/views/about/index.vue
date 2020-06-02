<template>
    <div class="about">
        <el-card class="box-card fl card-1" shadow="hover">
            <div slot="header">我们是做什么的</div>
            <div>简介</div>
        </el-card>
        <el-card class="box-card fr card-2" shadow="hover">
            <div slot="header">我们在哪里</div>
            <div>map</div>
        </el-card>
        <el-card class="box-card fl card-3" shadow="hover">
            <div slot="header">联系我们</div>
            <div class="content">
                <p class="row"><span class="t">Tel: </span>14012345678</p>
                <p class="row"><span class="t">WeChat: </span>14012345678</p>
            </div>
        </el-card>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class About extends Vue {}
</script>

<style lang="less" scoped>
.about {
    margin: 60px 100px 0;
    padding-bottom: 20px;

    &::after {
        content: '';
        display: block;
        clear: both;
    }

    .box-card {
        width: 300px;
        clear: both;

        &.card-1 {
            transform: rotate(10deg);
        }
        &.card-2 {
            transform: rotate(-10deg);
        }
        &.card-3 {
            transform: rotate(5deg);
        }
    }

    .content {
        .row {
            display: flex;

            .t {
                min-width: 70px;
            }
        }
    }
}
</style>
