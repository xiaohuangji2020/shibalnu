<template>
    <div>
        <div class="animate" @click="getNextScreen">a点击看效果</div>
        <div class="grid">
            <div
                v-for="(item, index) of images"
                :key="index"
                :style="{ 'background-image': 'url(' + item + ')' }"
                class="pic-wall"
            ></div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import $ from 'jquery';

@Component
export default class PicWall extends Vue {
    private images: string[] = [];
    private nextImages: string[] = [];
    private width: number = window.innerWidth;
    private height: number = window.innerHeight - 100 - 50;
    private rNum: number = Math.floor(this.width / 200);
    private cNum: number = Math.floor(this.height / 150);
    private mounted() {
        for (let i = 1; i <= this.rNum * this.cNum; i++) {
            this.images.push('/img/picwall/pic-1.jpeg');
        }
    }

    private getNextPics() {
        this.nextImages = [];
        for (let i = 1; i <= 50; i++) {
            this.nextImages.push('/img/picwall/pic-2.jpeg');
        }
    }

    private getNextScreen() {
        this.getNextPics();
        let d = 0; //延时
        $('.pic-wall').each((index: number, el: Element) => {
            d = Math.random() * 1000; //1ms to 1000ms delay
            $(el)
                .delay(d)
                .animate(
                    { opacity: 0 },
                    {
                        step: (n: number) => {
                            $(el).css('transform', 'scale(' + n + ')');
                        },
                        duration: 300
                    }
                )
                .promise()
                .done(() => {
                    this.$set(this.images, index, this.nextImages[index]);
                    $(el).animate(
                        { opacity: 1 },
                        {
                            step: (n: number) => {
                                $(el).css('transform', 'scale(' + n + ')');
                            },
                            duration: 700
                        }
                    );
                });
        });
    }
}
</script>

<style lang="less" scoped>
.grid {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    margin: 0 auto;
    perspective: 500px; /*For 3d*/

    .pic-wall {
        width: 200px;
        height: 150px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }
}

.animate {
    text-transform: uppercase;
    background: rgb(0, 100, 0);
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px auto;
    width: 100px;
    text-align: center;
}
.animate:hover {
    background: rgb(0, 75, 0);
}
</style>
