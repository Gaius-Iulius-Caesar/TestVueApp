import { defineStore } from "pinia"
import { dayjs } from "element-plus"

export default defineStore("course", {
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage
      }
    ]
  },
  // 其它配置项
  state: () => {
    return {
      courseList: [
        {
          id: 1,
          name: "新时代中国特色社会主义",
          cover: "../../public/COList.png",
          category: "compulsive",
          teacher: "张三",
          abstract: "",
          semester: "2019#2",
          rate: 0.1,
          score: {
            performance: 0,
            homework: 0,
            exam: 0
          },
          task: [
            {
              id: 1,
              name: "第三周作业",
              type: "homework",
              rate: 0.5,
              deadline: dayjs("2023-04-25").format("YYYY-MM-DD HH:mm:ss")
            },
            {
              id: 2,
              name: "期中考试",
              type: "exam",
              rate: 0.2,
              deadline: dayjs("2023-05-1").format("YYYY-MM-DD HH:mm:ss")
            }
          ]
        },
        {
          id: 2,
          name: "智能穿戴设备：技术与时尚",
          cover: "../../public/COList.png",
          category: "compulsive",
          teacher: "张三",
          abstract: "",
          semester: "2021#1",
          rate: 0.2,
          score: {
            performance: 0,
            homework: 0,
            exam: 0
          },
          task: [
            {
              id: 1,
              name: "实验作业",
              type: "homework",
              rate: 0.1,
              deadline: dayjs("2023-04-02").format("YYYY-MM-DD HH:mm:ss")
            }
          ]
        },
        {
          id: 3,
          name: "创意、视觉、营销、传播：理论与实践",
          cover: "../../public/COList.png",
          category: "optional",
          teacher: "张三",
          abstract: "",
          semester: "2022#2",
          rate: 0.5,
          score: {
            performance: 0,
            homework: 0,
            exam: 0
          },
          task: [
            {
              id: 1,
              name: "期末考试",
              type: "exam",
              rate: 0.6,
              deadline: dayjs("2023-04-05").format("YYYY-MM-DD HH:mm:ss")
            }
          ]
        }
      ]
    }
  },
  getters: {},
  actions: {
    getReminder() {
      // 获取需要提示的课程考试作业
      const reminderList = []
      this.courseList.forEach((course) => {
        const reminder = {}
        reminder.courseName = course.name
        course.task.forEach((task) => {
          reminder.taskType = task.type
          reminder.taskName = task.name
          reminder.deadline = task.deadline
          reminderList.push(reminder)
        })
      })
      return reminderList
    },
    getCOList(category) {
      const COList = []
      this.courseList.forEach((course) => {
        if (course.category === category) {
          const item = {}
          item.name = course.name
          item.cover = course.cover
          item.teacher = course.teacher
          item.rate = course.rate
          COList.push(item)
        }
      })
      return COList
    },
    getSemesterList() {
      const semesterList = []
      this.courseList.forEach((course) => {
        semesterList.push(course.semester)
      })
      semesterList.sort((pre, post) => {
        if (pre.split("#")[0] === post.split("#")[0]) {
          return pre.split("#")[1] < post.split("#")[1]
        }
        return pre.split("#")[0] < post.split("#")[0]
      })
      return semesterList
    },
    getCPMain(semester) {
      const CPMain = []
      this.courseList.forEach((course) => {
        if (semester === "ALL" || course.semester === semester) {
          const item = {}
          item.name = course.name
          item.cover = course.cover
          item.teacher = course.teacher
          item.rate = course.rate
          CPMain.push(item)
        }
      })
      return CPMain
    }
  }
})
