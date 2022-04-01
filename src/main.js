import Vue from "vue";
import Axios from "axios";

import App from "./App.vue";

Vue.config.productionTip = false;
Vue.prototype.$axios = Axios;

import "bootstrap";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
