import { createApp } from 'vue'
import App from '@/App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import '@/styles/index.scss'

import 'virtual:svg-icons-register'
import gloablComponent from './components/index'

import router from './router'

import pinia from './store'

/**
 * 禁止使用
 * const app = createApp(App)
 * app.use(xxx)
 * app.use(yyy)
 * ...
 * 的形式初始化Vue3
 * 因为这种形式在开发者工具（V6.5.0）上会无法展示 router pinia 等插件
 * 修改成如下形式便可重新激活上述插件的入口
 */

createApp(App)
  .use(ElementPlus)
  .use(gloablComponent)
  .use(router)
  .use(pinia)
  .mount('#app')
