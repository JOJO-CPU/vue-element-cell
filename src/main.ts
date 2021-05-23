import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "normalize.css/normalize.css"; // 样式重置
import Element from "element-ui";
import "./styles/element-variables.scss"; //自定义element主题

import "@/styles/index.scss"; // 全局css

// import "./permission"; // 权限控制

import router from "./router";
import store from "./store";

Vue.use(Element, { size: "small", zIndex: 3000 });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
