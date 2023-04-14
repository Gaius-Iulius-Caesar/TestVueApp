<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <el-affix style="position: absolute; left: 10px" :offset="220">
    <el-card class="operation_card" shadow="always">
      <el-row style="margin-left: 17px; margin-top: 20px">
        <el-tooltip
          class="box-item"
          effect="dark"
          content="编辑"
          placement="top"
        >
          <el-button
            type="primary"
            style="width: 50px; height: 50px; margin-right: 15px"
            circle
            @click="jumpTo('/writepost')"
            ><el-icon size="30px"><Edit /></el-icon
          ></el-button>
        </el-tooltip>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="标记"
          placement="top"
        >
          <el-button
            type="success"
            style="width: 50px; height: 50px; argin-right: 100px"
            circle
            ><el-icon size="30px"><Star /></el-icon
          ></el-button>
        </el-tooltip>
      </el-row>
      <el-row style="margin-left: 17px; margin-top: 20px">
        <el-tooltip
          class="box-item"
          effect="dark"
          content="刷新"
          placement="top"
        >
          <el-button
            type="warning"
            style="width: 50px; height: 50px; margin-right: 15px"
            circle
            @click="$forceUpdate()"
            ><el-icon size="30px"><Refresh /></el-icon
          ></el-button>
        </el-tooltip>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="返回首页"
          placement="top"
        >
          <el-button
            type="danger"
            style="width: 50px; height: 50px"
            circle
            @click="jumpTo('/bbs/announce')"
            ><el-icon size="30px"><DArrowLeft /></el-icon
          ></el-button>
        </el-tooltip>
      </el-row>
    </el-card>
  </el-affix>
  <div class="home_body">
    <div id="head" class="head">
      <div style="background-color: #e0d9d95d; height: 100px"></div>
      <el-avatar
        src="https://static.nowcoder.com/head/526m.png"
        class="head_avatar"
      />
      <div class="head_userName">
        {{ user.username }}
      </div>
      <el-descriptions
        v-if="iconShow"
        class="user_detail"
        title="用户详情"
        size="large"
        :column="3"
        border
      >
        <template #extra>
          <el-button type="primary" @click="dialogFormVisible = true"
            >编辑用户信息</el-button
          >
        </template>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <user />
              </el-icon>
              用户名
            </div>
          </template>
          {{ user.username }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <iphone />
              </el-icon>
              电话
            </div>
          </template>
          {{ user.tel }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <location />
              </el-icon>
              地址
            </div>
          </template>
          {{ user.address }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <tickets />
              </el-icon>
              职位
            </div>
          </template>
          <el-tag> {{ user.position }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <office-building />
              </el-icon>
              详细地址
            </div>
          </template>
          {{ user.address_detail }}
        </el-descriptions-item>
      </el-descriptions>

      <el-tooltip :content="iconContent" effect="light">
        <el-icon
          v-if="!iconShow"
          :size="20"
          class="arrowIcon"
          @click="showUserDetail"
          ><ArrowDownBold
        /></el-icon>
        <el-icon
          v-if="iconShow"
          :size="20"
          class="arrowIcon"
          @click="dontShowUserDetail"
          ><ArrowUpBold
        /></el-icon>
      </el-tooltip>
    </div>
    <div id="mainField" class="mainField">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="我的" name="first">
          <div
            v-for="item in items"
            :key="item"
            class="itemField"
            @click="showInvationDetail"
          >
            <el-avatar shape="square" :src="item.avatar" class="item_avatar" />
            <div class="item_title">{{ item.title }}</div>
            <div class="item_context">{{ item.context }}</div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="学习进度" name="second">
          <el-table
            :row-style="{ height: '60px' }"
            :data="lessons"
            border
            style="width: 100%"
            size="large"
            :header-cell-style="{ textAlign: 'center' }"
            :cell-style="{ textAlign: 'center' }"
          >
            <el-table-column type="index" width="50" />
            <el-table-column
              height="100px"
              prop="lesson_name"
              label="课程名"
              width="80"
            >
              <template #default="scope">
                <el-tag type="success"
                  >{{ scope.row.lesson_name }}
                </el-tag></template
              >
            </el-table-column>
            <el-table-column prop="lesson_chapter" label="章节" width="200" />
            <el-table-column prop="lesson_rate" label="课程进度" width="350">
              <template #default="scope">
                <el-progress
                  :text-inside="true"
                  :stroke-width="26"
                  :percentage="scope.row.lesson_rate"
              /></template>
            </el-table-column>
            <el-table-column prop="address" label="状态">
              <el-tag>在上</el-tag>
            </el-table-column>
            <el-table-column label="操作">
              <template #default="scope">
                <el-button type="success" @click="showLessonDetail(scope.row)"
                  >查看详情</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <el-table
            style="margin-top: 30px"
            :header-cell-style="{ textAlign: 'center' }"
            :cell-style="{ textAlign: 'center' }"
            :data="thischapterList"
          >
            <el-table-column width="100%" :label="thisLesson.lesson_name">
              <el-table-column type="index" width="50" />
              <el-table-column prop="name" label="章节名" width="220" />
              <el-table-column label="进度" width="420">
                <template #default="scope">
                  <el-progress
                    :text-inside="true"
                    :stroke-width="26"
                    :status="scope.row.type"
                    :percentage="scope.row.process"
                /></template>
              </el-table-column>
              <el-table-column p label="状态" width="250">
                <template #default="scope">
                  <el-tag :type="scope.row.type">{{ scope.row.state }}</el-tag>
                </template>
              </el-table-column>
            </el-table-column>
          </el-table>
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
    <el-dialog v-model="dialogFormVisible" title="编辑用户详情">
      <el-form :model="form">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="changed_user.username" autocomplete="off" />
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="changed_user.tel" autocomplete="off" />
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="changed_user.address" autocomplete="off" />
        </el-form-item>
        <el-form-item label="详细地址" :label-width="formLabelWidth">
          <el-input v-model="changed_user.address_detail" autocomplete="off" />
        </el-form-item>
        <el-form-item label="职位" :label-width="formLabelWidth">
          <el-input v-model="changed_user.position" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button
            @click=";(dialogFormVisible = false), (changed_user = user)"
            >取消</el-button
          >
          <el-button
            type="primary"
            @click=";(dialogFormVisible = false), (user = changed_user)"
          >
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog
      v-model="invationDetail"
      title="帖子详情"
      width="50%"
      :before-close="handleClose"
    >
      <el-skeleton animated />
      <br />
      <el-skeleton animated style="--el-skeleton-circle-size: 100px">
        <template #template>
          <el-skeleton-item variant="circle" />
        </template>
      </el-skeleton>
    </el-dialog>
  </div>
</template>

<script>
import { useRouter } from "vue-router"
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  ArrowDownBold,
  ArrowUpBold,
  Star,
  DArrowLeft,
  Refresh,
  Edit
  // eslint-disable-next-line import/no-unresolved
} from "@element-plus/icons"

export default {
  components: {
    ArrowDownBold,
    ArrowUpBold,
    Star,
    DArrowLeft,
    Refresh,
    Edit
  },
  setup() {
    const router = useRouter()
    function jumpTo(r) {
      console.log("123")
      router.push({
        path: r
      })
    }
    return {
      jumpTo
    }
  },
  data() {
    return {
      iconShow: false,
      iconContent: "查看用户详情",
      dialogFormVisible: false,
      invationDetail: false,
      user: {
        username: "admin",
        tel: 114514,
        address: "苏州",
        address_detail: "安徽省 苏州市 工业大道114路 514号",
        position: "教♂授"
      },
      changed_user: {
        username: "admin",
        tel: 114514,
        address: "苏州",
        address_detail: "安徽省 苏州市 工业大道114路 514号",
        position: "教♂授"
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
          lesson_rate: 60,
          lesson_chapter: "奥特曼打小怪兽"
        },
        {
          lesson_name: "数学",
          lesson_rate: 43,
          lesson_chapter: "不努力不等式"
        },
        {
          lesson_name: "英语",
          lesson_rate: 33,
          lesson_chapter: "happy  game"
        },
        {
          lesson_name: "社会学",
          lesson_rate: 100,
          lesson_chapter: "家人们，谁懂阿"
        }
      ],
      thisLesson: {
        lesson_name: "英语",
        lesson_rate: 23,
        lesson_chapter: "happy  game"
      },
      thischapterList: [
        {
          name: "你好",
          process: 100,
          state: "完成",
          type: "success"
        },
        {
          name: "奥特曼打小怪兽",
          process: 88,
          state: "在学",
          type: "1"
        },
        {
          name: "法司法",
          process: 0,
          state: "未学",
          type: "danger"
        }
      ],
      chapterList1: [
        {
          name: "杂货哦划西是",
          process: 100,
          state: "完成",
          type: "success"
        },
        {
          name: "奥特曼打小怪兽",
          process: 88,
          state: "在学",
          type: "1"
        },
        {
          name: "法司法",
          process: 0,
          state: "未学",
          type: "danger"
        }
      ],

      chapterList2: [
        {
          name: "乘除法",
          process: 100,
          state: "完成",
          type: "success"
        },
        {
          name: "不努力不等式",
          process: 38,
          state: "在学",
          type: "1"
        },
        {
          name: "哥德巴赫猜想",
          process: 0,
          state: "未学",
          type: "danger"
        }
      ],

      chapterList3: [
        {
          name: "happygame",
          process: 99,
          state: "在学",
          type: "1"
        },
        {
          name: "unhappygame",
          process: 0,
          state: "未学",
          type: "danger"
        },
        {
          name: "deadgame",
          process: 0,
          state: "未学",
          type: "danger"
        }
      ],

      chapterList4: [
        {
          name: "下头男预防指南",
          process: 100,
          state: "完成",
          type: "success"
        },
        {
          name: "集美养成教程",
          process: 100,
          state: "完成",
          type: "success"
        },
        {
          name: "家人们，谁懂阿",
          process: 100,
          state: "完成",
          type: "success"
        }
      ],
      lessonDialogVisible: false
    }
  },
  methods: {
    handleClick() {},
    showUserDetail() {
      this.iconShow = !this.iconShow
      this.iconContent = "收起用户详情"
      document.getElementById("head").className = "head head_detail "
      document.getElementById("mainField").className =
        "mainField mainField_detail "

      console.log(this.iconShow)
    },
    dontShowUserDetail() {
      this.iconShow = !this.iconShow
      this.iconContent = "查看用户详情"
      document.getElementById("head").className = "head "
      document.getElementById("mainField").className = "mainField"

      console.log(this.iconShow)
    },
    showInvationDetail() {
      this.invationDetail = true
    },
    showLessonDetail(row) {
      this.thisLesson = row
      if (row.lesson_name === "语文") {
        this.thischapterList = this.chapterList1
      }
      if (row.lesson_name === "数学") {
        this.thischapterList = this.chapterList2
      }
      if (row.lesson_name === "英语") {
        this.thischapterList = this.chapterList3
      }
      if (row.lesson_name === "社会学") {
        this.thischapterList = this.chapterList4
      }
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
.head_detail {
  height: 350px !important;
}
.operation_card {
  width: 200px;
  height: 200px;
}
.head_avatar {
  position: absolute;
  top: 100px;
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
.arrowIcon {
  margin: 10px auto;
  position: absolute;
  height: auto;
  top: 85%;
  left: 50%;
  transition: translateX(50%);
}
.arrowIcon:hover {
  cursor: pointer;
}
.user_detail {
  position: relative;
  bottom: 45px;
}
.mainField {
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #e6e5e5;
  width: 1000px;
  border-radius: 10px;
  box-shadow: 1px 2px 0px 0px #e5e5e580;
  margin: 10px auto;
}
.mainField_detail {
  top: 350px !important;
}
.demo-tabs {
  padding: 32px;
  color: #6b778c;
  font-size: 28px;
  font-weight: 600;
}
.itemField {
  background-color: #ffffffa8;
  min-height: 200px;
  border-radius: 10px;
  box-shadow: 1px 2px 0px 0px #e5e5e580;
  margin: 10px auto;
}
.itemField:hover {
  background-color: #ffffff;
  cursor: pointer;
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

.el-tabs /deep/.el-tabs__item {
  font-size: 20px;
}
</style>
