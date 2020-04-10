<template>
    <div class="show">
        <pic-wall></pic-wall>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PicWall from './PicWall.vue';

@Component({
    components: {
        PicWall
    }
})
export default class Show extends Vue {}
</script>

<style lang="less" scoped></style>
