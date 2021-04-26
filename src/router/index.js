import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/main.vue";
import RefillBalance from "../views/refill-balance.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/operator/:slug",
    name: "operator",
    component: RefillBalance,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
