import { createRouter, createWebHistory } from "vue-router";

import Landing from "./views/Landing.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/:pathMatch(.*)*", component: import("./views/404Page.vue") },
    {
      path: "/",
      component: Landing,
    },
    {
      path: "/contact",
      component: () => import("./views/Contact.vue"),
    },
    {
      path: "/repos",
      component: () => import("./views/Repositories.vue"),
    },
  ],
});
