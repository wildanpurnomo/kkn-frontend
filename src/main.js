import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify';
import * as VueGoogleMaps from "vue2-google-maps";
import VueObserveVisibility from 'vue-observe-visibility'
import Axios from 'axios';

const shared = {
  API_BASE_URL: process.env.API_BASE_URL || process.env.VUE_APP_API_BASE_URL
};

shared.install = function() {
  Object.defineProperty(Vue.prototype, '$API_BASE_URL', {
    get() { return shared }
  })
}

Vue.config.productionTip = false
Vue.prototype.$http = Axios;
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.GMAPS_API_KEY || process.env.VUE_APP_GMAPS_API_KEY,
    libraries: "places",
  }
});
Vue.use(VueObserveVisibility);
Vue.use(shared);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

