<template>
  <div id="announce_box">
    <div id="announce_header">通知中心</div>
    <hr />

    <div id="announce_list">
      <div id="lastest_announce">最近收到的通知</div>
      <el-divider />
      <div id="announce_body">
        <div
          v-for="info in infos"
          :key="info"
          class="infoField"
          @click="($event) => showinfo(info)"
        >
          <el-avatar shape="square" :src="info.avatar" class="info_avatar" />
          <div class="info_title">{{ info.title }}</div>
          <div class="info_time">{{ info.time }}</div>
          <div class="info_context">{{ info.context }}</div>
        </div>
      </div>
      <el-dialog
        v-model="infodialogVisible"
        :title="thisinfo.title"
        width="50%"
        :before-close="handleClose"
      >
        <div class="showinfo_time">{{ thisinfo.time }}</div>
        <div class="showinfo_context">{{ thisinfo.context }}</div>
        <template #footer>
          <span class="dialog-footer">
            <el-button type="primary" @click="infodialogVisible = false">
              确定
            </el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "BbsAnnounce",
  data() {
    return {
      infos: [
        {
          title: "语文小助手",
          avatar:
            "https://pic1.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xl.jpg?source=32738c0c",
          context: "开课了",
          time: "04-12"
        },
        {
          title: "系统通知",
          avatar:
            "https://pic1.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xl.jpg?source=32738c0c",
          context:
            "偶像明星也会有职场焦虑吗？年近三十，该留在大城市继续打拼还是回老家？当初的愿望实现了吗？为了梦想，你愿意去降薪转行吗？",
          time: "04-11"
        },
        {
          title: "数学小助手",
          avatar:
            "https://pic1.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xl.jpg?source=32738c0c",
          context: "离散数学作业",
          time: "04-10"
        },
        {
          title: "英语小助手",
          avatar:
            "https://pic1.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xl.jpg?source=32738c0c",
          context: "专业英语上课了",
          time: "04-10"
        },
        {
          title: "英语小助手",
          avatar:
            "https://pic1.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xl.jpg?source=32738c0c",
          context: "专业英语上课了",
          time: "04-10"
        },
        {
          title: "英语小助手",
          avatar:
            "https://pic1.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xl.jpg?source=32738c0c",
          context: "专业英语上课了",
          time: "04-09"
        },
        {
          title: "英语小助手",
          avatar:
            "https://pic1.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xl.jpg?source=32738c0c",
          context: "专业英语上课了",
          time: "04-08"
        },
        {
          title: "英语小助手",
          avatar:
            "https://pic1.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xl.jpg?source=32738c0c",
          context: "专业英语上课了",
          time: "04-06"
        },
        {
          title: "英语小助手",
          avatar:
            "https://pic1.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xl.jpg?source=32738c0c",
          context: "专业英语上课了",
          time: "03-31"
        },
        {
          title: "英语小助手",
          avatar:
            "https://pic1.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xl.jpg?source=32738c0c",
          context: "专业英语上课了",
          time: "03-29"
        },
        {
          title: "英语小助手",
          avatar:
            "https://pic1.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xl.jpg?source=32738c0c",
          context: "专业英语上课了",
          time: "03-26"
        },
        {
          title: "英语小助手",
          avatar:
            "https://pic1.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xl.jpg?source=32738c0c",
          context: "专业英语上课了",
          time: "03-19"
        }
      ],
      thisinfo: {},
      infodialogVisible: false
    }
  },
  methods: {
    handleClick() {},
    showinfo(info) {
      this.thisinfo = info
      this.infodialogVisible = true
    }
  }
}
</script>

<style scoped>
#announce_header {
  color: #121212;
  font-size: 19px;
  font-weight: 600;
  align-items: center;
  display: flex;
  height: 64px;
  padding-top: 0px;
  padding-right: 24px;
  padding-bottom: 0px;
  padding-left: 24px;
  border-color: #121212;
  border-width: 0.5px;
  border-style: solid;
  margin-top: 8px;
}
#announce_list {
  margin-top: 1px;
  margin-left: 5px;
}
#lastest_announce {
  color: #121212;
  font-size: 16px;
  font-weight: 500;
  align-items: center;
  padding-top: 0px;
  padding-right: 24px;
  padding-bottom: 0px;
  padding-left: 24px;
  margin-top: 5px;
  margin-bottom: 0px;
}
#announce_body {
  position: relative;
  background-color: white;
}
.infoField {
  position: relative;
  background-color: #ffffff;
  height: 90px;
  border-radius: 10px;
  margin: 10px auto;
}
.info_avatar {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}
.info_title {
  position: absolute;
  top: 5%;
  left: 10%;
  color: #121212;
  font-weight: 600;
}
.info_time {
  position: absolute;
  right: 5px;
}
.info_context {
  position: absolute;
  top: 50%;
  left: 10%;
  width: 560px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.showinfo_time {
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translateX(-50%);
  font-size: 5px;
}
.showinfo_context {
  position: absolute;
  color: #121212;
  font-family: 宋体;
  text-indent: 2em;
}
</style>
