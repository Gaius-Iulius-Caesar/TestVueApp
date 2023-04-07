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
        component: () => import("@/components/CourseStudy/CSResource.vue"),
        props: (route) => ({ query: Number(route.query.courseId) })
      },
      {
        path: "task",
        name: "Task",
        component: () => import("@/components/CourseStudy/CSTask.vue"),
        props: (route) => ({ query: Number(route.query.courseId) })
      },
      {
        path: "study",
        name: "Study",
        component: () => import("@/components/CourseStudy/CSStudy.vue"),
        props: (route) => ({ query: Number(route.query.courseId) })
      }
    ]
  },
  {
    path: "/source-learn",
    name: "SourceLearn",
    component: () => import("@/views/SourceLearning.vue"),
    props: (route) => ({
      query: {
        courseId: Number(route.query.cId),
        resourceId: Number(route.query.rId),
        fileId: Number(route.query.fId)
      }
    }),
    children: [
      {
        path: "pdf",
        Name: "PdfLearning",
        component: () => import("@/components/SourceLearning/PdfLearning.vue"),
        props: (route) => ({
          query: {
            courseId: Number(route.query.cId),
            resourceId: Number(route.query.rId),
            fileId: Number(route.query.fId)
          }
        })
      },
      {
        path: "video",
        Name: "VideoLearning",
        component: () =>
          import("@/components/SourceLearning/VideoLearning.vue"),
        props: (route) => ({
          query: {
            courseId: Number(route.query.cId),
            resourceId: Number(route.query.rId),
            fileId: Number(route.query.fId)
          }
        })
      }
    ]
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("@/views/TestPage.vue")
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
