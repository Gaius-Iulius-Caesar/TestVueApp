import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/bbs",
    name: "Bbs",
    component: () => import("@/views/Bbs.vue"),
    redirect: "/bbs/bbsBody?title=推荐",
    children: [
      {
        path: "bbsBody",
        name: "BbsBody",
        component: () => import("@/views/BbsBody.vue")
      },
      {
        path: "announce",
        name: "Announce",
        component: () => import("@/views/BbsAnnounce.vue")
      },
      {
        path: "home",
        name: "BbsHome",
        component: () => import("@/views/BbsHome.vue")
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
