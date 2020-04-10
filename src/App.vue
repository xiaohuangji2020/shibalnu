<template>
    <div id="app">
        <the-header></the-header>
        <div style="height: 100px;"></div>
        <router-view />
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TheHeader from '@/components/common/TheHeader.vue';

@Component({
    components: {
        TheHeader
    }
})
export default class App extends Vue {}
</script>
<style lang="less">
#app {
    position: relative;
    min-height: 100vh;
    background: @bg-light;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
