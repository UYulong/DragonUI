## 项目搭建过程

#### 一、项目环境说明：

| 环境       | 版本信息 |
| ---------- | -------- |
| Node.js    | 16.14.0  |
| Vite       | 2.9.9    |
| Vue        | 3.2.25   |
| TypeScript | 4.5.4    |

#### 二、搭建项目基础架构

1. 创建项目

   ```bash
   yarn create vite // 根据创建项目类型回答相应问题
   ```

2. 引入jsx，解决编写tsx错误的问题

   ```bash
   yarn add @vitejs/plugin-vue-jsx -D
   ```

   ```js
   // vite.config.js
   import vueJsx from '@vitejs/plugin-vue-jsx' // 导入
   vueJsx() // 执行
   ```

3. 解决代码规范 **【先行安装vs code插件：Eslint、Prettier插件】**

   ```bash
   npx eslint --init // 根据创建项目类型回答相应问题
   
   yarn add -D prettier eslint-plugin-prettier eslint-config-prettier // 安装 prettier 配合 eslint 使用
   
   npx mrm@2 lint-staged // 安装 husky,提交时校验staged code
   ```

   详细配置

   ```js
   // .eslintrc.js
   extends: [
       'plugin:@typescript-eslint/recommended',
       'plugin:vue/vue3-recommended',
       'plugin:prettier/recommended'
   ],
   
   // .prettierrc.js
   module.exports = {
     // printWidth: 80,
     // tabWidth: 2,
     // useTabs: false,
     semi: false, // 未尾分号, default:  true
     singleQuote: true, // 单引号 default: false
     // quoteProps: 'as-needed',
     // jsxSingleQuote: false,
     trailingComma: 'none', // 未尾分号 default: es5    all | none | es5
     // bracketSpacing: true,
     // bracketSameLine: false,
     // jsxBracketSameLine: false,
     arrowParens: 'avoid', // default: always
     // insertPragma: false,
     // requirePragma: false,
     proseWrap: 'never',
     // htmlWhitespaceSensitivity: 'css',
     // vueIndentScriptAndStyle: false,  // .vue 缩进
     endOfLine: 'auto' // default lf
   }
   ```

4. 文档系统建立——vitepress

   ```bash
   yarn add -D vitepress
   ```

   