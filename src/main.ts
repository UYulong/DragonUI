import { createApp } from 'vue'
import App from './App.vue'

import './style/index.scss'

// 组件测试
import Button from './button/index'

const app = createApp(App)
app.use(Button)
app.mount('#app')
