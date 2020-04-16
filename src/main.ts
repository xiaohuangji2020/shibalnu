import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { Image, Button, Card } from 'element-ui';

Vue.use(Image);
Vue.use(Button);
Vue.use(Card);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
