<template>
  <div class="wrapper">
    <div
      style="
        margin: 300px auto;
        background-color: #fff;
        width: 350px;
        height: 300px;
        padding: 20px;
        border-radius: 10px;
      "
    >
      <div style="margin: 20px 0; text-align: center; font-size: 24px">
        <b>登录</b>
      </div>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        class="demo-ruleForm"
      >
        <el-form-item prop="name">
          <el-input
            v-model="ruleForm.name"
            placeholder="请输入账号"
            style="margin: 10px 0"
            :prefix-icon="User"
          />
        </el-form-item>
        <el-form-item prop="pass">
          <el-input
            v-model="ruleForm.pass"
            placeholder="请输入密码"
            style="margin: 10px 0"
            :prefix-icon="Lock"
            type="password"
            autocomplete="new-password"
            show-password
          />
        </el-form-item>

        <el-form-item>
          <div style="margin: 0 auto">
            <el-button type="primary" @click="submitForm(ruleFormRef)">
              登陆
            </el-button>
            <el-button @click="resetForm(ruleFormRef)">重置</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { reactive, ref } from "vue"
import { useRouter } from "vue-router"
import useUsersStore from "@/store/user"
import { User, Lock } from "@element-plus/icons-vue"

export default {
  name: "LoginPage",
  components: [User, Lock],
  setup() {
    const ruleForm = reactive({
      pass: "",
      name: ""
    })
    const ruleFormRef = ref()
    const store = useUsersStore()
    const router = useRouter()

    function setCookie(name, value) {
      const Days = 1
      const exp = new Date()
      exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
      document.cookie = `${name}=${value};expires=${exp.toGMTString()};path=/`
    }
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"))
      }
      callback()
    }
    const rules = reactive({
      pass: [{ validator: validatePass, trigger: "blur" }],
      name: [{ required: true, msg: "用户名不能为空", trigger: "blur" }]
    })
    const submitForm = async (formEl) => {
      if (!formEl) return
      formEl.validate((valid) => {
        if (valid) {
          if (store.exist(ruleForm.name, ruleForm.pass)) {
            alert("登陆成功，即将跳转到主页")
            setCookie("username", ruleForm.name)
            router.push({ path: "/bbs" })
          } else {
            alert("用户名或密码错误")
          }
        } else {
          alert("error submit!")
          return false
        }
        return true
      })
    }
    const resetForm = (formEl) => {
      if (!formEl) return
      formEl.resetFields()
    }
    return { ruleForm, rules, ruleFormRef, submitForm, resetForm, User, Lock }
  }
}
</script>
<style scoped>
.wrapper {
  height: 100vh;
  background-image: linear-gradient(to bottom right, #6746fc, #fb3f55);
  overflow: hidden;
}
</style>
