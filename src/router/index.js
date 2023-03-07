import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/home",
    name: "Test",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("@/views/Admin.vue"),
    children: [
      {
        path: "bbsBody",
        name: "BbsBody",
        component: () => import("@/views/BbsBody.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/components/LoginPage.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/components/RegisterPage.vue")
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
