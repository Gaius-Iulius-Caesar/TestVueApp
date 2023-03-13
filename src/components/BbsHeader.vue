<template>
  <div class="box">
    <div class="navBox">
      <div class="logo">
        <img src="../../public/logo.jpg" alt="" />
      </div>
      <div class="tabBox">
        <el-button
          v-for="tab in Tab"
          :key="tab.id"
          :type="tab.type"
          text
          @click="jump(tab.content)"
          >{{ tab.content }}</el-button
        >
      </div>
      <div class="searchBox">
        <el-input>
          <template #suffix>
            <el-button link><i-ep-search /></el-button>
          </template>
        </el-input>
      </div>
      <div class="loginBox">
        <div v-if="username">
          <el-dropdown>
            <span class="el-dropdown-link">
              <el-avatar :size="50" :src="imgurl"></el-avatar>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="jumpTo('/bbs/home')"
                  >个人主页</el-dropdown-item
                >
                <el-dropdown-item @click="logout()">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div v-else class="loginButton">
          <el-button type="primary" round @click="jumpTo('/login')"
            >登陆
          </el-button>
          <el-button type="primary" round @click="jumpTo('/register')"
            >注册
          </el-button>
        </div>
      </div>
      <div class="announceBox">
        <el-badge :value="12" :max="99" class="item">
          <el-button link @click="jumpTo('/bbs/announce')">
            <div>
              <i-ep-bell-filled></i-ep-bell-filled>
              <div>公告</div>
            </div>
          </el-button>
        </el-badge>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router"
import { computed, inject } from "vue"

import useUsersStore from "../store/user"

export default {
  name: "BbsHeader",
  setup() {
    function getCookie(objName) {
      // 获取指定名称的cookie的值
      const arrStr = document.cookie.split("; ")
      for (let i = 0; i < arrStr.length; i += 1) {
        const temp = arrStr[i].split("=")
        if (temp[0] === objName) {
          return decodeURI(temp[1])
        }
      }
      return ""
    }
    const Tab = [
      { id: "0", type: "", content: "推荐" },
      { id: "1", type: "", content: "热榜" },
      { id: "2", type: "", content: "高赞" },
      { id: "3", type: "", content: "心理" },
      { id: "4", type: "", content: "娱乐" },
      { id: "5", type: "", content: "校园" }
    ]
    const router = useRouter()
    const store = useUsersStore()
    const username = getCookie("username")
    const imgurl = computed(() => store.getUrl(username))
    const reload = inject("reload")

    function logout() {
      document.cookie =
        "username=''; expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;"
      reload()
    }
    function jump(title) {
      router.push({
        path: "/bbs/bbsBody",
        query: {
          title
        }
      })
    }
    function jumpTo(r) {
      router.push({
        path: r
      })
    }

    return {
      logout,
      Tab,
      jump,
      jumpTo,
      imgurl,
      username
    }
  }
}
</script>

<style scoped>
.box {
  width: 100%;
  box-shadow: 0 1px 3px hsla(0, 0%, 7%, 0.1);
}

.navBox {
  /* width: fit-content; */
  /* margin: 0 auto; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1 0;
}

.logo img {
  height: 70px;
  width: 70px;
}
.tabBox {
  display: flex;
  margin-right: 50px;
}

.el-button {
  font-size: 16px;
}
.searchBox {
  margin-right: 50px;
}

.loginBox {
  display: flex;
}
.loginButton {
  display: flex;
}
.announceBox {
  margin-left: 10px;
}
</style>
