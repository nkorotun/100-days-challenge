<script setup lang="ts">
defineProps<{
  msg: String,
}>()
</script>

<template>
  <header>
    <img src="../assets/logo.svg" alt="Vue logo" />
    <h1>{{ msg }}</h1>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 16px;
}

img {
  max-width: 52px;
  max-height: 52px;
  width: 100%;
  height: 100%;
}
</style>
