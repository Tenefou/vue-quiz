<template>
  <div class="quizzes-view">
    <div v-if="quizzes.length">
      <div>
        <h1>{{ quizzes[numberQuizzes].title }}</h1>
        <hr />

        <p>{{ quizzes[numberQuizzes].questions.length }} questions</p>
        <hr />
        <br />
        <h1>Question {{ numberQuestion + 1 }}</h1>
        <h2>{{ quizzes[numberQuizzes].questions[numberQuestion].question }}</h2>
        <br />
        <ul>
          <li
            v-for="answer in quizzes[numberQuizzes].questions[numberQuestion].answers"
            :key="answer.answer"
          >
            {{ answer.answer }}
          </li>
        </ul>
      </div>
      <div class="buttons">
        <button @click="changerQuestion(-1)">précédent</button>
        <button @click="changerQuestion(1)">suivant</button>
      </div>
      <br />
      <div>
        <button @click="changerQuiz(-1)">Quiz précédent</button>
        <button @click="changerQuiz(1)">Quiz suivant</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useQuizStore } from '../stores/QuizStore'

const numberQuestion = ref(0)
const numberQuizzes = ref(0)

const quizStore = useQuizStore()
const quizzes = quizStore.getQuizzes

const changerQuestion = (plus: number) => {
  if (
    numberQuestion.value < 0 ||
    numberQuestion.value >= quizzes[numberQuizzes.value].questions.length
  ) {
    return null
  } else {
    numberQuestion.value += plus
  }
}

const changerQuiz = (plus: number) => {
  if (numberQuizzes.value + 1 > 0 && numberQuizzes.value + 1 <= quizzes.length) {
    numberQuestion.value = numberQuizzes.value + plus
  }
}
</script>

<style scoped>
.quizzes-view {
  border: 2vh solid hsla(160, 100%, 37%, 0.8);
}

button {
  color: hsla(160, 100%, 37%, 0.7);
  background-color: #333;
  border-radius: 0.5vh;
}

.buttons {
  display: flex;
  justify-content: space-between;
  gap: 2vh;
  margin-top: 2vh;
}
</style>
