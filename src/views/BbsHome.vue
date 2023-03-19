<template>
  <div class="home_body">
    <div class="head">
      <div style="background-color: #e0d9d95d; height: 50%"></div>
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        class="head_avatar"
      />
      <div class="head_userName">{{ user.username }}</div>
    </div>
    <div class="mainField">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="我的" name="first">
          <div v-for="item in items" :key="item" class="itemField">
            <el-avatar shape="square" :src="item.avatar" class="item_avatar" />
            <div class="item_title">{{ item.title }}</div>
            <div class="item_context">{{ item.context }}</div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="学习进度" name="second">
          <div
            v-for="lesson in lessons"
            :key="lesson"
            class="lesson_process"
            @click="showLessonDetail(lesson)"
          >
            <div class="lesson_name">
              {{ lesson.lesson_name }}
            </div>
            <el-progress
              :text-inside="true"
              :stroke-width="50"
              :percentage="lesson.lesson_rate"
              class="course_process"
            />
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <el-dialog
      v-model="lessonDialogVisible"
      :title="thisLesson.lesson_name"
      width="50%"
      :before-close="handleClose"
    >
      <span style="position: absolute; top: 50%"
        >当前章节： {{ thisLesson.lesson_chapter }}</span
      >
      <el-progress
        class="lessonDetail_process"
        type="circle"
        :percentage="thisLesson.lesson_rate"
      />
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="lessonDialogVisible = false">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "BbsHome",
  data() {
    return {
      user: {
        username: "admin"
      },
      activeName: "second",
      items: [
        {
          title: "标题",
          avatar:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          context: "这是内容"
        },
        {
          title: "标题",
          avatar:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          context: "这是内容"
        },
        {
          title: "标题",
          avatar:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          context: "这是内容"
        },
        {
          title: "标题",
          avatar:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          context: "这是内容"
        }
      ],
      lessons: [
        {
          lesson_name: "语文",
          lesson_rate: 10,
          lesson_chapter: "奥特曼打小怪兽"
        },
        {
          lesson_name: "数学",
          lesson_rate: 23,
          lesson_chapter: "不努力不等式"
        },
        {
          lesson_name: "英语",
          lesson_rate: 23,
          lesson_chapter: "happy  game"
        }
      ],
      thisLesson: {},
      lessonDialogVisible: false
    }
  },
  methods: {
    handleClick() {},
    showLessonDetail(lesson) {
      this.thisLesson = lesson
      this.lessonDialogVisible = true
    }
  }
}
</script>

<style scoped>
.home_body {
  background-color: #d8d8d8ab;
}

.head {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fffefe;
  width: 1000px;
  border-radius: 10px;
  box-shadow: 2px 3px 0px 0px #e0d9d95d;
  height: 200px;
}
.head_avatar {
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  width: 100px;
  height: 100px;
}
.head_userName {
  position: relative;
  left: 25%;
  width: 100px;
  height: 100px;
  font-size: 26px;
}
.mainField {
  position: absolute;
  top: 300px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #e6e5e5;
  width: 1000px;
  border-radius: 10px;
  box-shadow: 1px 2px 0px 0px #e5e5e580;
  margin: 10px auto;
}
.demo-tabs {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 800;
}
.itemField {
  background-color: #ffffff;
  min-height: 200px;
  border-radius: 10px;
  box-shadow: 1px 2px 0px 0px #e5e5e580;
  margin: 10px auto;
}
.item_avatar {
  position: relative;
  top: 50%;
  left: 5%;
  transform: translateY(50%);
  width: 100px;
  height: 100px;
}
.item_title {
  position: relative;
  top: -50px;
  left: 25%;
  width: auto;
  font-weight: 300;
}
.item_context {
  position: relative;
  top: -30px;
  left: 30%;
  font-weight: 300;
}
.lesson_process {
  min-height: 80px;
  background-color: #ffffff;
  border-radius: 50px;
  box-shadow: 1px 2px 0px 0px #e5e5e580;
  margin: 10px auto;
}
.lesson_name {
  position: relative;
  width: 100px;
  left: 5%;
  top: 40px;
  transform: translateY(-50%);
}
.course_process {
  position: relative;
  width: 600px;
  left: 15%;
  top: 50%;
  transform: translateY(-50%);
}
.lessonDetail_process {
  position: relative;
  display: inline-block;
  left: 50%;
}
</style>
