import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { CheckUserType } from '@/api/user/types'

export const useUserStore = defineStore('user', () => {
  const userToken = ref<string>('')
  const userInfo = reactive<CheckUserType>({
    userId: 0,
    avatar: '',
    username: '',
    password: '',
    desc: '',
    roles: [],
    buttons: [],
    routes: [],
    token: '',
  })

  function setUserToken(token: string): void {
    userToken.value = token
  }

  function getUserToken(): string {
    return userToken.value
  }

  function updateUserInfo(data: CheckUserType): void {
    userInfo.avatar = data.avatar
    userInfo.buttons = data.buttons
    userInfo.desc = data.desc
    userInfo.password = data.password
    userInfo.roles = data.roles
    userInfo.routes = data.routes
    userInfo.token = data.token
    userInfo.userId = data.userId
    userInfo.username = data.username
  }

  return {
    // 必须要将数据return出去才能在开发者选项中查看
    userToken,
    userInfo,
    getUserToken,
    setUserToken,
    updateUserInfo,
  }
})
