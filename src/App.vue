<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
// import Test from './components/test'
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <!-- <Test></Test> -->
  <DButton type="primary" size="medium" block>块级按钮</DButton>
  <DButton type="primary" size="large" disabled>确定</DButton>
  <DButton type="text" size="medium">取消</DButton>
  <DButton type="secondary" size="small">测试</DButton>
</template>

<style lang="scss">
#app {
  padding-top: 200px;
  width: 800px;
  margin: auto;
}
</style>
