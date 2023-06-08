import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const userToken = ref<string>('')

  function setUserToken(token: string): void {
    userToken.value = token
  }

  function getUserToken(): string {
    return userToken.value
  }

  return {
    getUserToken,
    setUserToken,
  }
})
