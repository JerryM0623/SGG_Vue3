import { createApp } from 'vue'
import App from '@/App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import '@/styles/index.scss'

import 'virtual:svg-icons-register'
import gloablComponent from './components/index'

import router from './router'

const app = createApp(App)

app.use(ElementPlus)
app.use(gloablComponent)
app.use(router)
app.mount('#app')
