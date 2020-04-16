<template>
    <div>
        <div class="op">
            <el-button type="text" class="prev-btn" @click="getPrevScreen">Prev</el-button>
            <div class="wish">愿每一只小柴 都能够被温柔以待</div>
            <el-button type="text" class="next-btn" @click="getNextScreen">Next</el-button>
        </div>
        <div class="grid">
            <el-image
                v-for="(url, index) of images"
                :key="index"
                class="pic-wall"
                :src="url"
                :preview-src-list="images"
            >
            </el-image>
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
    private page = 0;
    private pageSize = Math.floor(this.width / 200) * Math.floor(this.height / 150);
    private timing = 0;
    private waitingTime = 10000 * 1000;
    private mounted() {
        for (let i = 1; i <= this.pageSize; i++) {
            this.images.push('/img/picwall/pic-' + this.page + '.jpeg');
        }

        this.timing = setTimeout(() => {
            this.autoAnmiation();
        }, this.waitingTime);
    }

    private autoAnmiation() {
        this.page++;
        this.getNextPics();
        this.doAnimation();
        this.timing = setTimeout(() => {
            this.autoAnmiation();
        }, this.waitingTime);
    }

    private getNextPics() {
        this.nextImages = [];
        if (this.page > 4) {
            this.page = 0;
        }
        if (this.page < 0) {
            this.page = 4;
        }
        for (let i = 1; i <= 50; i++) {
            this.nextImages.push('/img/picwall/pic-' + this.page + '.jpeg');
        }
    }

    private getPrevScreen() {
        clearTimeout(this.timing);
        this.page--;
        this.getNextPics();
        this.doAnimation();
        this.timing = setTimeout(() => {
            this.autoAnmiation();
        }, this.waitingTime);
    }

    private getNextScreen() {
        clearTimeout(this.timing);
        this.page++;
        this.getNextPics();
        this.doAnimation();
        this.timing = setTimeout(() => {
            this.autoAnmiation();
        }, this.waitingTime);
    }

    private doAnimation() {
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
                    $(el)
                        .animate(
                            { opacity: 1 },
                            {
                                step: (n: number) => {
                                    $(el).css('transform', 'scale(' + n + ')');
                                },
                                duration: 700
                            }
                        )
                        .promise()
                        .done(() => {
                            $(el).css('transform', 'none');
                        });
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

    .pic-wall {
        width: 200px;
        height: 150px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;

        /deep/ .el-image-viewer__btn {
            color: white;
        }
    }
}
.op {
    display: flex;
    justify-content: space-between;
}
.wish {
    font-family: HuXiaoBoSaoBaoTi;
    font-size: 24px;
}
</style>
