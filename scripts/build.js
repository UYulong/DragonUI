/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')
const fsExtra = require('fs-extra')

// 入口文件地址
const entryFile = path.resolve(__dirname, './entry.ts')

// 出口文件地址
const outputDir = path.resolve(__dirname, '../build')

// 创建 package.json 文件
const createPackageJson = () => {
  const fileStr = `{
    "name": "dragon-ui",
    "version": "0.0.0",
    "main": "dragon-ui.umd.js",
    "module": "dragon-ui.mjs",
    "author": "UYulong",
    "github": "",
    "description": "vue3 ui 组件库",
    "repository": {
      "type": "git",
      "url": "https://github.com/UYulong/DragonUI"
    },
    "keywords": ["vue3", "组件库", "tsx", "UI"],
    "license": "ISC",
    "bugs": {
      "url": "https://github.com/UYulong/DragonUI/issues"
    }
  }`

  fsExtra.outputFile(path.resolve(outputDir, 'package.json'), fileStr, 'utf-8')
}

// 基础配置
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()]
})

// 配置 rollup 选项
const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

// 全量构建
const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: entryFile,
          name: 'dragon-ui',
          fileName: 'dragon-ui',
          formats: ['es', 'umd']
        },
        outDir: outputDir
      }
    })
  )

  createPackageJson()
}

const buildLib = async () => {
  await buildAll()
}

buildLib()
