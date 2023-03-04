import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/home",
    name: "Test",
    component: () => import("@/views/Home.vue")
  }
]

const router = createRouter({
  history: createWebHistory("/"),
  routes
})

/**
 * 输出对象
 */
export default router
