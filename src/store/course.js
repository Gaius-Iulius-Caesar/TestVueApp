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
          category: "compulsive",
          teacher: "张三",
          abstract: "",
          semester: "",
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
          category: "compulsive",
          teacher: "张三",
          abstract: "",
          semester: "",
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
          category: "compulsive",
          teacher: "张三",
          abstract: "",
          semester: "",
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
    }
  }
})
