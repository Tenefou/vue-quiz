<template>
  <div class="quizzes-view">
    <ul v-if="quizzes.length">
      <li>
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
      </li>
      <div>
        <button
          @click="
            numberQuestion > 0
              ? numberQuestion--
              : console.log(
                  'number question = ' +
                    numberQuestion +
                    ' Number quizzs = ' +
                    quizzes[numberQuizzes].questions.length,
                )
          "
        >
          précédent
        </button>
        <button
          @click="
            numberQuestion + 1 < quizzes[numberQuizzes].questions.length
              ? numberQuestion++
              : console.log('number question = ' + numberQuestion)
          "
        >
          suivant
        </button>
      </div>
      <br />
      <div>
        <button
          @click="
            numberQuizzes + 1 > quizzes[numberQuizzes].questions.length
              ? numberQuizzes--
              : console.log(
                  'number question = ' + numberQuizzes + ' Number quizzs = ' + quizzes.length,
                )
          "
        >
          Quiz précédent
        </button>
        <button
          @click="
            numberQuizzes + 1 < quizzes.length
              ? numberQuizzes++
              : console.log('number question = ' + numberQuizzes)
          "
        >
          Quiz suivant
        </button>
      </div>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useQuizStore } from '../stores/QuizStore'

const numberQuestion = ref(0)
const numberQuizzes = ref(0)

const quizStore = useQuizStore()
const quizzes = quizStore.getQuizzes
</script>

<style scoped>
.quizzes-view {
  border: 2vh solid hsla(160, 100%, 37%, 0.2);
}
</style>
