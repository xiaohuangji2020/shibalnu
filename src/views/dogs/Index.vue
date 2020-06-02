<template>
    <div class="dogs">
        <photo-frame></photo-frame>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PhotoFrame from '@/components/photo/PhotoFrame.vue';

@Component({
    components: {
        PhotoFrame
    }
})
export default class Dogs extends Vue {}
</script>

<style lang="less" scoped>
.dogs {
    width: 80%;
    min-width: 800px;
    max-width: 2000px;
    margin: 0 auto;
}
</style>
