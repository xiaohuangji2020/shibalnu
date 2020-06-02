<template>
    <canvas class="photo-frame" width="1600" height="800"></canvas>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import rough from 'roughjs/bin/rough';
import { RoughCanvas } from 'roughjs/bin/canvas';
@Component
export default class PhotoFrame extends Vue {
    @Prop([String]) private readonly avatar: string = '';
    @Prop([Object]) private readonly text: string[] = [];
    private mounted() {
        const canvas: HTMLCanvasElement | null = document.querySelector('.photo-frame');
        if (!canvas) {
            return;
        }
        const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
        if (!ctx) {
            return;
        }
        const rc: RoughCanvas = rough.canvas(canvas);
        this.drawBox(rc);
        this.drawAvatar(rc);
        this.drawTextLine(rc);
        this.drawText(ctx);
    }
    private drawBox(rc: RoughCanvas) {
        rc.rectangle(100, 100, 1400, 600, {
            fill: 'rgb(10,150,10)'
        });
    }
    private drawAvatar(rc: RoughCanvas) {
        rc.rectangle(200, 200, 300, 300, {
            hachureGap: 30,
            fillWeight: 5,
            fillStyle: 'cross-hatch',
            roughness: 5
        });
    }
    private drawTextLine(rc: RoughCanvas) {
        [1, 2, 3, 4].forEach((item, index) => {
            const y = 300 + index * 80;
            rc.line(600, y, 1400, y, { roughness: 2 });
        });
    }
    private drawText(ctx: CanvasRenderingContext2D) {
        ctx.font = '50px sans-serif';
        ctx.fillStyle = '#606266';
        ctx.textAlign = 'center';
        [1, 2, 3, 4].forEach((item, index) => {
            const y = 290 + index * 80;
            ctx.fillText('我3岁啦', 1000, y);
        });
    }
}
</script>

<style lang="less" scoped>
.photo-frame {
    width: 800px;
    height: 400px;
}
</style>
