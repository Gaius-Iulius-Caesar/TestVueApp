import { defineStore } from "pinia"
import { dayjs } from "element-plus"
import CourseCover from "@/assets/image/CourseCover.png"

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
          cover: CourseCover,
          category: "compulsive",
          teacher: "张三",
          abstract:
            "为全面贯彻党的教育方针，落实立德树人根本任务，扎实推进习近平新时代中国特色社会主义思想进课程教材，我委制定了《习近平新时代中国特色社会主义思想进课程教材指南》，现印发给你们，请在课程教材、教育教学等育人环节认真贯彻落实。",
          semester: "2019#2",
          rate: 0.1,
          score: {
            performance: 10,
            homework: 0,
            exam: 0
          },
          study: [
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
          ],
          task: [
            {
              type: "inform",
              title: "课程学习截止时间提醒！！",
              content:
                "各位同学好！本学期课程学习将于明晚23：59截止，如果还没有学完的同学请尽快学习！\n" +
                "\n" +
                "学完的同学可以提前准备好论文，论文主题与本学期学习内容相关即可，格式、封面等考试开放后可在考试要求中查看，大家可以先将论文准备好，以免错过论文提交时间。\n" +
                "\n" +
                "线上提交论文时间为2022年5月1日—5月3日，注意进入考试后请尽快提交，以防系统自动交卷，也不要最后卡点提交，以防系统拥堵，“显示提交成功却未成功”这种情况出现！",
              timestamp: dayjs("2023-05-1").format("YYYY-MM-DD HH:mm:ss")
            },
            {
              type: "task",
              title: "毕业班本学期课程修读任务（2018级非五年制）",
              content:
                "1、了解课程基本修读要求：见学习资源板块中的“课程公告”和“学习指南”。\n" +
                "2、学习和作业任务：2022年5月1日前（因为涉及毕业审核，因此学习和考试时间截止日相应提前，务必注意！！！）完成全部线上四章教学内容的学习和对应章测试，可以根据情况，合理安排时间进度。（学习进度和章测试相加占学期成绩的40%）。\n" +
                "3、期末课程论文提交：2022年5月1日—5月3日完成本课程期末课程论文的在线提交工作（课程论文占学期成绩60%）\n" +
                "4、本学期的课程论文选题为结合本学期主要教学内容（十九届六中全会精神解读/两会精神解读/数字经济/双碳战略/台海形势/乌克兰危机/国际国内经济形势等）选择其中一个主题，自拟题目进行论述，如：十九届六中全会精神学习体会或乌克兰危机对中国的影响及启示等，撰写一篇不少于2000字的课程论文，具体格式见考试任务中的要求。可以先准备好论文，在系统开放期末考试时进行提交工作。注意：一旦点击进入期末考试界面，需要尽快完成提交。否则系统可能会自动提交并结算为0分。",
              timestamp: dayjs("2023-05-1").format("YYYY-MM-DD HH:mm:ss")
            }
          ]
        },
        {
          id: 2,
          name: "智能穿戴设备：技术与时尚",
          cover: CourseCover,
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
          study: [
            {
              id: 1,
              name: "实验作业",
              type: "homework",
              rate: 0.1,
              deadline: dayjs("2023-04-02").format("YYYY-MM-DD HH:mm:ss")
            }
          ],
          task: []
        },
        {
          id: 3,
          name: "创意、视觉、营销、传播：理论与实践",
          cover: CourseCover,
          category: "optional",
          teacher: "张三",
          abstract: "",
          semester: "2022#2",
          rate: 0.5,
          score: {
            performance: 60,
            homework: 0,
            exam: 0
          },
          study: [
            {
              id: 1,
              name: "期末考试",
              type: "exam",
              rate: 0.6,
              deadline: dayjs("2023-04-05").format("YYYY-MM-DD HH:mm:ss")
            }
          ],
          task: []
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
        course.study.forEach((study) => {
          reminder.taskType = study.type
          reminder.taskName = study.name
          reminder.deadline = study.deadline
          reminderList.push(reminder)
        })
      })
      return reminderList
    },
    getCourseCardBYCategory(category) {
      // 获取课程概览列表
      const COList = []
      this.courseList.forEach((course) => {
        if (course.category === category) {
          const item = {}
          item.id = course.id
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
      // 获取当前课程涉及的学期
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
    getCourseCardBySemester(semester) {
      // 获取课程概览卡片
      const CPMain = []
      this.courseList.forEach((course) => {
        if (semester === "ALL" || course.semester === semester) {
          const item = {}
          item.id = course.id
          item.name = course.name
          item.cover = course.cover
          item.teacher = course.teacher
          item.rate = course.rate
          CPMain.push(item)
        }
      })
      return CPMain
    },
    getTaskById(courseId) {
      const task = []
      this.courseList.forEach((course) => {
        if (course.id === courseId) {
          task.push(...course.task)
        }
      })
      return task
    },
    getCourseById(id) {
      let out = null
      this.courseList.forEach((course) => {
        if (course.id === id) {
          out = course
        }
      })
      return out
    }
  }
})
