import Theme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import HelloWorld from '../../../src/components/HelloWorld.vue'
import Test from '../../../src/components/test'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'


export default {
  ...Theme,

  enhanceApp({ app }) {
    app.component('HelloWorld', HelloWorld)
    app.component('Test', Test)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  }
}