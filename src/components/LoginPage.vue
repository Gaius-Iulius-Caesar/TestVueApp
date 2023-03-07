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

      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >登陆</el-button
        >
        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { reactive, ref, onMounted } from "vue"
import { useRouter } from "vue-router"
import useUsersStore from "../store/user"

export default {
  name: "LoginPage",
  setup() {
    const ruleForm = reactive({
      pass: "",
      name: ""
    })
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
            router.push({ path: "/admin" })
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
    onMounted(() => {
      console.log("$$$$$$$$$$", store.user)
    })
    return { ruleForm, rules, ruleFormRef, submitForm, resetForm }
  }
}
</script>
<style scoped>
.box {
  width: 600px;
  margin: 100px auto;
}
</style>
