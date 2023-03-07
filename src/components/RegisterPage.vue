<template>
  <div class="box">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          v-model="ruleForm.pass"
          type="password"
          autocomplete="new-password"
          show-password
        />
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input
          v-model="ruleForm.checkPass"
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
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >注册</el-button
        >
        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive, ref } from "vue"
import { useRouter } from "vue-router"
import useUsersStore from "../store/user"

export default {
  name: "RegisterPage",
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
            window.console.log("#########", store.user)
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
      const id = Math.floor(Math.random() * 600)
      url.value = `https://static.nowcoder.com/head/${id}m.png`
    }
    return {
      ruleForm,
      rules,
      ruleFormRef,
      submitForm,
      resetForm,
      url,
      generateimg
    }
  }
}
</script>
<style scoped>
.box {
  width: 600px;
  margin: 100px auto;
}
</style>
