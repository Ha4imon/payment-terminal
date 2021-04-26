import { createApp } from "vue";
import App from "./app.vue";
import router from "./router";
import store from "./store";
import VueTheMask from "vue-the-mask";

createApp(App).use(store).use(router).use(VueTheMask).mount("#app");
