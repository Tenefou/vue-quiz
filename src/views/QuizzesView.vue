<template>
  <HeaderComponent />
  <main>
    <div class="quizzes-view">
      <h1>Quizzes</h1>
      <ul v-if="quizzes.length">
        <li v-for="quiz in quizzes" :key="quiz.id">
          {{ quiz.title }}
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup lang="ts">
import HeaderComponent from '../components/HeaderComponent.vue'
import { useQuizStore } from '@/stores/quizStore'

const quizStore = useQuizStore()
const quizzes = quizStore.quizzes
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
</style>
