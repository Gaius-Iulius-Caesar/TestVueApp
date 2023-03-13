import { defineStore } from "pinia"

export default defineStore("posts", {
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
      postList: [
        {
          id: 1,
          title: "字节实习半年，我被通知转正失败",
          summry: "大致内容",
          content:
            "“经过讨论，转正可能没有过。你技术能力还可以，但是沟通能力不够...”会议室里，坐在我对面的 leader 说着。虽然已经意料到这个结局，但是亲身经历，还是令我感到很崩溃。回到工位上，我胡乱地敲着键盘，飞书上的消息接踵而至，而我的思绪已经全然不在工作上了。\n" +
            "\n" +
            "去年 3 月份，我收到了字节暑期实习的前端 offer，因为疫情，到 7 月份时入职了字节，之后一直工作到现在，今年 1 月份，leader 主动提出了转正。\n" +
            "互联网寒冬下，千万大学生毕业\n" +
            "\n" +
            "字节早有 hc 不够的传闻，去年字节官方宣传 hc 数量达到 8000 个，然而今年的宣传 hc 仅有 3000 个，换句话说，今年的 hc 还没有去年的一半多，现实也确实如此。然而不仅仅是字节这一家大厂，其他大厂的情况也是如此，甚至还不如字节。大厂是这样，中小厂就更不招人了。\n" +
            "\n" +
            "然而今年的大学生毕业生数量再次创下新高：1158 万。去年的毕业生还有一大半没有被就业市场消化，再加上相关行业的裁员，实际需要就业的人数是一个我都不敢想的数字。\n" +
            "结束北漂生活，一切回到平静\n" +
            "\n" +
            "还记得当初拿到 offer 时，我还没有这么焦虑。那是学校里的一个平静的下午，我像往常一样查看邮箱中的邮件，当看到录取通知函的时候，我的心情激动地难以言表。在焦灼地度过学校的封闭，期末考试之后，终于迎来了暑假，我早早地预定了高铁票，来到了北京。\n" +
            "\n" +
            "在北京工作和生活的时光，似乎一瞬间就过去了。初来北京时，还是盛夏，穿着 T 恤，公交车轰隆来往，排放着热气，地铁的喇叭播放着扫码登记，窗明几净的字节工区，陌生的同事和 mentor，充满挑战性和新奇的工作内容...\n" +
            "也许，我们都走不出自己的浪浪山\n" +
            "\n" +
            "失望总是贯穿人生，也许，从一开始就不该幻想走出原来的浪浪山。",
          author: "admin"
        },
        {
          id: 2,
          title: "测试",
          summry: "大致内容",
          content: "详细内容",
          author: "admin"
        },
        {
          id: 3,
          title: "测试",
          summry: "大致内容",
          content: "详细内容",
          author: "admin"
        },
        {
          id: 4,
          title: "测试",
          summry: "大致内容",
          content: "详细内容",
          author: "admin"
        },
        {
          id: 5,
          title: "测试",
          summry: "大致内容",
          content: "详细内容",
          author: "admin"
        },
        {
          id: 6,
          title: "测试",
          summry: "大致内容",
          content: "详细内容",
          author: "admin"
        }
      ],
      commentList: [
        {
          id: 1,
          belong: 1,
          content: "这是第一条评论",
          username: "admin",
          time: "2023-03-13 12:00:00",
          children: [
            {
              id: 1,
              content: "这是第一条子评论",
              replay: "admin",
              username: "admin",
              time: "2023-03-13 12:30:00"
            },
            {
              id: 2,
              content: "这是第二条子评论",
              replay: "",
              username: "1",
              time: "2023-03-13 12:30:00"
            },
            {
              id: 3,
              content: "这是第三条子评论",
              replay: "1",
              username: "2",
              time: "2023-03-13 12:30:00"
            },
            {
              id: 4,
              content: "这是第四条子评论",
              replay: "2",
              username: "3",
              time: "2023-03-13 12:30:00"
            }
          ]
        }
      ]
    }
  },
  actions: {
    getDetail(id) {
      const idNumber = Number(id)
      const result = this.postList.find((item) => {
        return idNumber === item.id
      })

      if (result !== undefined) {
        return result
      }
      return false
    },
    getComments(id) {
      const idNumber = Number(id)
      const output = []
      this.commentList.forEach((elem) => {
        if (elem.belong === idNumber) {
          output.push(elem)
        }
      })
      return output
    },
    addComment(obj) {
      const last = this.commentList.slice(-1)
      const lastId = last[0].id
      const addObj = obj
      addObj.id = Number(lastId) + 1
      this.commentList.push(addObj)
    },
    addChildren(id, obj) {
      const idNumber = Number(id)
      const result = this.commentList.findIndex((item) => {
        return idNumber === item.id
      })
      const last = this.commentList[result].children.slice(-1)
      let lastId = 1
      if (last.length !== 0) lastId = last[0].id
      const addObj = obj
      addObj.id = Number(lastId) + 1
      this.commentList[result].children.push(addObj)
    }
  }
})
