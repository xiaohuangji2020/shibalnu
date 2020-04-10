<template>
    <div>
        <div class="animate">点击看效果</div>
        <div class="grid"></div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import $ from 'jquery';

@Component
export default class PicWall extends Vue {
    private d = 0;
    private ry = 0;
    private tz = 0;
    private s = 0;
    private mounted() {
        let images = '';
        const count = 50;
        for (let i = 1; i <= count; i++) images += '<img width="80" src="https://cn.vuejs.org/images/logo.png" />';
        $('.grid').append(images);

        let d = 0; //延时
        let ry, tz, s; //定义转换参数

        $('.animate').on('click', () => {
            $('img')
                .each(() => {
                    d = Math.random() * 1000; //1ms to 1000ms delay
                    $(this)
                        .delay(d)
                        .animate(
                            { opacity: 0 },
                            {
                                step: (n: number) => {
                                    s = 1 - n; //scale - will animate from 0 to 1
                                    $(this).css('transform', 'scale(' + s + ')');
                                },
                                duration: 1000
                            }
                        );
                })
                .promise()
                .done(() => {
                    this.storm(); //淡出效果全部完成时调用
                });
        });
    }

    private storm() {
        $('img').each((index: number, el: any) => {
            this.d = Math.random() * 1000;
            $(el)
                .delay(this.d)
                .animate(
                    { opacity: 1 },
                    {
                        step: (n: number) => {
                            //rotating the images on the Y axis from 360deg to 0deg
                            this.ry = (1 - n) * 360;
                            //translating the images from 1000px to 0px
                            this.tz = (1 - n) * 1000;
                            //applying the transformation
                            $(this).css('transform', 'rotateY(' + this.ry + 'deg) translateZ(' + this.tz + 'px)');
                        },
                        duration: 3000
                        // easing: 'easeOutQuint'
                    }
                );
        });
    }
}
</script>

<style lang="less" scoped>
.grid {
    width: 600px;
    height: 300px;
    margin: 100px auto 50px auto;
    perspective: 500px; /*For 3d*/
}
.grid img {
    width: 60px;
    height: 60px;
    display: block;
    float: left;
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
