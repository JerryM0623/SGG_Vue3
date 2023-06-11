import { defineStore } from 'pinia'
import { ref } from 'vue'

const useLayoutStore = defineStore('layout', () => {
  const isSideMenuCollapse = ref(false)

  function updateCollapse() {
    isSideMenuCollapse.value = !isSideMenuCollapse.value
  }

  return {
    isSideMenuCollapse,
    updateCollapse,
  }
})

export default useLayoutStore
