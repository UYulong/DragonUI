// 标题配置
const siteTitle = 'Dragon UI'

// 顶部导航配置
const nav = [
  { text: 'Guide', link: '/guide' },
  {
    text: 'Dropdown Menu',
    items: [
      {
        // Title for the section.
        text: 'Section A Title',
        items: [
          { text: 'Section A Item A', link: '...' },
          { text: 'Section B Item B', link: '...' }
        ]
      }
    ]
  },
  {
    text: 'Dropdown Menu',
    items: [
      {
        // You may also omit the title.
        items: [
          { text: 'Section A Item A', link: '...' },
          { text: 'Section B Item B', link: '...' }
        ]
      }
    ]
  }
]

// 侧边栏配置
const sidebar = [
  { text: '快速开始', items: [{ text: '开始', link: '/components/start/' }] },
  {
    text: '通用',
    collapsible: true,
    collapsed: false, // 默认是否展开
    items: [
      { text: 'Button 按钮', link: '/components/button/' },
      { text: 'Item B', link: '/item-b' }
    ]
  },
  { text: '导航', items: [] },
  { text: '反馈', items: [] },
  {
    text: '数据录入',
    collapsible: true,
    items: [
      {
        text: 'Input 输入框',
        link: '/components/input/'
      }
    ]
  }
]

const config = {
  // lang: 'en-US',
  // title: 'VitePress',
  // description: 'Vite & Vue powered static site generator.',
  themeConfig: {
    sidebar,
    nav,
    siteTitle
  },
  markdown: {
    // 这里 的 demoBlockPlugin 插件是为了在文档中预览组件效果和代码
    config: (md) => {
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    }
  }
}

export default config
