import type { App } from 'vue'
import ButtonPlugin, { Button } from '../src/button'

// 插件列表
const installLists = [ButtonPlugin]

export { Button }

export default {
  install(app: App) {
    // 遍历全量安装
    installLists.forEach(plugin => app.use(plugin))
  }
}
