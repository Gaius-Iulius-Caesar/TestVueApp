<template>
  <div class="wrapper">
    <div
      style="
        margin: 300px auto;
        background-color: #fff;
        width: 400px;
        height: 400px;
        padding: 20px;
        border-radius: 10px;
      "
    >
      <div style="margin: 20px 0; text-align: center; font-size: 24px">
        <b>注册</b>
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
            style="margin: 10px 10px"
            :prefix-icon="User"
          />
        </el-form-item>
        <el-form-item prop="pass">
          <el-input
            v-model="ruleForm.pass"
            placeholder="请输入密码"
            style="margin: 10px 10px"
            :prefix-icon="Lock"
            type="password"
            autocomplete="new-password"
            show-password
          />
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input
            v-model="ruleForm.checkPass"
            placeholder="请确认密码"
            style="margin: 10px 10px"
            :prefix-icon="Lock"
            type="password"
            autocomplete="new-password"
            show-password
          />
        </el-form-item>
        <el-form-item>
          <el-button @click="generateimg()"> 生成头像</el-button>
          <el-avatar
            v-if="url"
            :size="100"
            :src="url"
            style="margin-left: 30px"
          ></el-avatar>
        </el-form-item>
        <el-form-item>
          <div style="margin: 0 auto">
            <el-button type="primary" @click="submitForm(ruleFormRef)"
              >注册</el-button
            >
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
  name: "RegisterPage",
  components: [User, Lock],
  setup() {
    const ruleForm = reactive({
      pass: "",
      checkPass: "",
      name: ""
    })
    const url = ref()
    const ruleFormRef = ref()
    const store = useUsersStore()
    const router = useRouter()
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"))
      } else {
        if (ruleForm.checkPass !== "") {
          ruleFormRef.value.validateField("checkPass")
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"))
      } else if (value !== ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"))
      } else {
        callback()
      }
    }
    const rules = reactive({
      pass: [{ validator: validatePass, trigger: "blur" }],
      checkPass: [{ validator: validatePass2, trigger: "blur" }],
      name: [{ required: true, msg: "用户名不能为空", trigger: "blur" }]
    })
    const submitForm = async (formEl) => {
      if (!formEl) return
      formEl.validate((valid) => {
        if (valid) {
          const success = store.increment(ruleForm.name, ruleForm.pass, url)
          if (success) {
            alert("注册成功，即将跳转到登录页面")
            router.push({ path: "/login" })
          } else {
            window.alert("用户名已存在")
            return false
          }
        } else {
          window.alert("error submit!")
          return false
        }
        return true
      })
    }
    const resetForm = (formEl) => {
      if (!formEl) return
      formEl.resetFields()
    }
    function generateimg() {
      const id = Math.floor(Math.random() * 1000)
      url.value = `https://static.nowcoder.com/head/${id}m.png`
    }
    return {
      ruleForm,
      rules,
      ruleFormRef,
      submitForm,
      resetForm,
      url,
      generateimg,
      User,
      Lock
    }
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
