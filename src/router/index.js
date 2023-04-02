import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/LoginPage.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/RegisterPage.vue")
  },
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
    path: "/post",
    name: "Post",
    component: () => import("@/views/Post.vue")
  },
  {
    path: "/writepost",
    name: "WritePost",
    component: () => import("@/views/WritePost.vue")
  },
  {
    path: "/course-overview",
    name: "CourseOverview",
    component: () => import("@/views/CourseOverview.vue")
  },
  {
    path: "/course-platform",
    name: "CoursePlatform",
    component: () => import("@/views/CoursePlatform.vue")
  },
  {
    path: "/course-study",
    name: "CourseStudy",
    component: () => import("@/views/CourseStudy.vue"),
    props: (route) => ({ query: Number(route.query.courseId) }),
    redirect: "/course-study/resource",
    children: [
      {
        path: "resource",
        name: "Resource",
        component: () => import("@/components/CSResource.vue")
      },
      {
        path: "task",
        name: "Task",
        component: () => import("@/components/CSTask.vue"),
        props: (route) => ({ query: Number(route.query.courseId) })
      },
      {
        path: "study",
        name: "Study",
        component: () => import("@/components/CSStudy.vue")
      }
    ]
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
