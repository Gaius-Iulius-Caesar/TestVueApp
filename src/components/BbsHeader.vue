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
        <el-input suffix-icon="el-icon-search"></el-input>
      </div>

      <div class="loginBox">
        <el-button type="primary" round @click="jumpTo('/login')"
          >登陆</el-button
        >
        <el-button type="primary" round @click="jumpTo('/register')"
          >注册</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router"

export default {
  name: "BbsHeader",
  setup() {
    function handleSelect() {
      window.console.log("select")
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
    function jump(title) {
      router.push({
        path: "/admin/bbsBody",
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
      handleSelect,
      Tab,
      jump,
      jumpTo
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
  position: relative;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 70px;
  width: 70px;
}
.logo img {
  height: 100%;
  width: 100%;
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
</style>
