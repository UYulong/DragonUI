<script setup lang="ts" name="HelloWorld">
import { ref } from 'vue'
const msg = ref('hello')
</script>

<template>
  <h1 class="font-bold text-3xl">{{ msg }}</h1>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
