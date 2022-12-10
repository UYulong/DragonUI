import { createApp } from 'vue'
import App from './App.vue'

import './style/index.scss'

// 组件测试
// import Button from './button/index'
import DragonUI from '../build/'

const app = createApp(App)
app.use(DragonUI)
app.mount('#app')
