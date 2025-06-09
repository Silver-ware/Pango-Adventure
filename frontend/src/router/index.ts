import { createRouter, createWebHistory } from "vue-router";

import GameLayout from "../layout/GameLayout.vue";

const routes = [
  {
    path: "/adventure",
    component: GameLayout,
    children: [
      {
        path: "",
        redirect: {name: "DjangoEnviroment"},
      },
      {
        path: "overview",
        name: "DjangoEnviroment",
        component: () => import('../modules/adventure/views/Level0View.vue'),
      },
      // {
      //   path: "/01",
      //   // component: () => import(""),
      // },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
