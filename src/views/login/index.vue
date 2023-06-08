<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage, ElNotification } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'
import type { UserLoginReqDataModel } from '@/api/user/types'
import { userLogin } from '@/api/user'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/modules/user.ts'

const router = useRouter()
const userStore = useUserStore()

const loginLoading = ref(false)
const loginFormRef = ref<FormInstance>(null)

const loginForm = reactive({
  username: '',
  password: '',
})

const rules: FormRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 5, message: '用户名至少5个字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码至少6个字符', trigger: 'blur' },
  ],
}

function login() {
  loginFormRef.value.validate((isValid: boolean) => {
    if (!isValid) {
      ElMessage.error('输入信息有误，请重新确认')
    } else {
      // 开启加载
      loginLoading.value = true

      // 拼接参数
      const data: UserLoginReqDataModel = {
        username: loginForm.username,
        password: loginForm.password,
      }

      // 发送请求
      userLogin(data)
        .then((res) => {
          const { data } = res
          // 因为这里面data永远只可能存在 token 或者 message 其中一个属性，也就是说登录成功就意味着token存在，反之message存在
          if (data.token) {
            // 保存 token
            userStore.setUserToken(data.token)
            // 登录成功
            ElNotification({
              type: 'success',
              title: 'Success!',
              message: '登录成功!!!',
            })
            router.push({ name: 'Home' })
          } else {
            ElNotification({
              type: 'error',
              title: 'Oops!',
              message: data.message,
            })
          }
        })
        .catch((err) => {
          console.error(err)
        })
        .finally(() => {
          loginLoading.value = false
        })
    }
  })
}
</script>

<template>
  <div class="login-container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24" class="right-col">
        <el-form
          class="login-form"
          :model="loginForm"
          :rules="rules"
          ref="loginFormRef"
        >
          <div class="title">Hello!</div>
          <div class="sub-title">键入账户密码开始使用吧!</div>
          <el-form-item prop="username">
            <el-input
              :prefix-icon="User"
              placeholder="请输入用户名"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              :prefix-icon="Lock"
              type="password"
              placeholder="请输入密码"
              show-password
              v-model="loginForm.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class="login-btn"
              type="primary"
              @click="login"
              :loading="loginLoading"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.login-container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .el-row {
    height: 100%;

    .right-col {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 100%;

      .login-form {
        width: 70%;
        background: url('@/assets/images/login_form.png');
        background-size: cover;
        padding: 20px;

        .title {
          font-size: 40px;
          color: white;
        }

        .sub-title {
          font-size: 20px;
          color: white;
          margin: 20px 0;
        }

        .login-btn {
          width: 100%;
        }
      }
    }
  }
}
</style>
