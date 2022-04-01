import Vue from "vue";
import Axios from "axios";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faStar, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

import App from "./App.vue";

Vue.config.productionTip = false;
Vue.prototype.$axios = Axios;

library.add(faStar, faStarRegular, faMagnifyingGlass);

Vue.component("font-awesome-icon", FontAwesomeIcon);

import "bootstrap";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
