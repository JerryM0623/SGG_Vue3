import { defineStore } from 'pinia'
import { ref } from 'vue'

const useLayoutStore = defineStore('layout', () => {
  const isSideMenuCollapse = ref(false)
  const isRouterViewRefresh = ref(false)

  function updateCollapse() {
    isSideMenuCollapse.value = !isSideMenuCollapse.value
  }

  function updateRefresh() {
    isRouterViewRefresh.value = !isRouterViewRefresh.value
  }

  return {
    isSideMenuCollapse,
    isRouterViewRefresh,
    updateCollapse,
    updateRefresh,
  }
})

export default useLayoutStore
