// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/Home.vue"),
        children: [
          {
            path: "supplements",
            name: "home-supplements",
            component: () => import("@/views/home-stuffs/HomeSupplements.vue"),
          },
          {
            path: "vitamins",
            name: "home-vitamins",
            component: () => import("@/views/home-stuffs/HomeVitamins.vue"),
          },
          {
            path: "clothing",
            name: "home-clothing",
            component: () => import("@/views/home-stuffs/HomeClothing.vue"),
          },
          {
            path: "accessories",
            name: "home-accessories",
            component: () => import("@/views/home-stuffs/HomeAccessories.vue"),
          },
          {
            path: "program",
            name: "home-program",
            component: () => import("@/views/home-stuffs/HomeProgram.vue"),
          },
        ],
      },
      {
        path: "/statistics",
        name: "statistics",
        component: () => import("@/views/Statistics.vue"),
      },
      {
        path: "/logs",
        name: "logs",
        component: () => import("@/views/Logs.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
