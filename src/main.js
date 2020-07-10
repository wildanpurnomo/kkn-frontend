import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify';
import * as VueGoogleMaps from "vue2-google-maps";
import Axios from 'axios';

Vue.config.productionTip = false
Vue.prototype.$http = Axios;
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAlCDNG8s1cBrNqPenQaMKHfItCMEyQYik",
    libraries: "places",
  }
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

