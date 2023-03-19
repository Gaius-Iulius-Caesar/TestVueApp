import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/bbs",
    name: "Bbs",
    component: () => import("@/views/Bbs.vue"),
    redirect: "/bbs/bbsBody?title=hot",
    children: [
      {
        path: "bbsBody",
        name: "BbsBody",
        component: () => import("@/components/BbsBody.vue")
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
  },
  {
    path: "/post",
    name: "Post",
    component: () => import("@/views/Post.vue")
  },
  {
    path: "/writepost",
    name: "WritePost",
    component: () => import("@/views/WritePost.vue")
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
