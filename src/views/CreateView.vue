<template>
  <HeaderComponent />
  <main>
    <h1>Create Quiz</h1>
    <form>
      <input type="text" id="title" name="title" />
      <button type="submit">Create</button>
    </form>
  </main>
</template>

<script setup lang="ts">
import HeaderComponent from '../components/HeaderComponent.vue'
</script>

<style scoped></style>
