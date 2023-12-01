import { createApp } from 'vue'
// import './style.css'
import ElementPlus from 'element-plus'
// import '@/styles/reset.less'
import App from '@/App.vue'
import 'element-plus/dist/index.css'
import 'tailwindcss/tailwind.css'
//@ts-expect-error 跳过检查
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'virtual:svg-icons-register'
import router from './router'
import pinia from './store'
import globalComponents from '@/components/index'

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(globalComponents)
app.use(router)
app.use(pinia)
app.mount('#app')
