import Vue from "vue";
import App from "./App.vue";
import CompositionAPI from "@vue/composition-api";
import "@/core/style/style.scss";

Vue.use(CompositionAPI);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
