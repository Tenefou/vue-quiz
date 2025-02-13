<template>
  <header>
    <div>
      <RouterLink to="/"><img src="/favicon.ico" alt="Logo" /></RouterLink>
    </div>
    <nav>
      <RouterLink to="/quizzes">Quizzes</RouterLink>
      <RouterLink to="/manage">Manage Quiz</RouterLink>
      <RouterLink to="/create">Create Quiz</RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 2vh;
  width: 100%;
  height: 7vh;
}

nav {
  display: flex;
  gap: 2vh;
}
</style>
