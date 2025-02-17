<template>
  <HeaderComponent />

  <main>
    <div class="quizzes-view">
      <QuizComponent />
    </div>
  </main>
</template>

<script setup lang="ts">
import HeaderComponent from '../components/HeaderComponent.vue'
import QuizComponent from '../components/QuizComponent.vue'
</script>

<style scoped>
.quizzes-view {
  padding: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
  font-size: 18px;
}

.quizzes-view {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  width: 40vh;
  gap: 20px;
}
</style>
