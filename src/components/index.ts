import type { App } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
export default {
  install: (app: App) => {
    // 引入所有组件下的安装模块
    const modules: any = import.meta.glob('../components/*/*.vue')
    for (const path in modules) {
      app.use(modules[path].default)
    }
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
