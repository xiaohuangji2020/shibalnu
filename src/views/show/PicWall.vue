<template>
    <div>
        <div class="grid"></div>
        <div class="animate">点击看效果</div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class PicWall extends Vue {
    private mounted() {
        // let images = '',
        //     count = 50;
        // for (let i = 1; i <= count; i++) images += '<img src="http://thecodeplayer.com/u/uifaces/' + i + '.jpg" />';
        // $('.grid').append(images);
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
