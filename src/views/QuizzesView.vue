<template>
  <HeaderComponent />
  <main>
    <div class="quizzes-view">
      <h1>Quizzes</h1>
      <ul>
        <li v-for="quiz in quizzes" :key="quiz.id">
          {{ quiz.title }}
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup lang="ts">
import HeaderComponent from '../components/HeaderComponent.vue'
import { ref } from 'vue'

const quizzes = ref([
  { id: 1, title: 'Quiz 1' },
  { id: 2, title: 'Quiz 2' },
  { id: 3, title: 'Quiz 3' },
])
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
