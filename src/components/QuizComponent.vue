<template>
  <div class="quizzes-view">
    <div class="quiz-form" v-if="quizzes.length">
      <h1>{{ quizzes[numberQuizzes].title }}</h1>
      <hr />

      <p>{{ quizzes[numberQuizzes].questions.length }} questions</p>
      <hr />

      <h1 style="padding: 20px">Question {{ numberQuestion + 1 }}</h1>
      <h2>{{ quizzes[numberQuizzes].questions[numberQuestion].question }}</h2>

      <ul style="margin-bottom: 30px">
        <li v-for="answer in answers" :key="answer.answer">
          <div class="answers">
            {{ answer.answer }}
            <input type="radio" :value="answers.indexOf(answer)" />
          </div>
        </li>
      </ul>

      <div v-if="done">{{ score }} / {{ quizzes[numberQuizzes].questions.length }}</div>

      <div class="buttons">
        <div>
          <button @click="changerQuestion(-1)">précédent</button>
          <button @click="changerQuestion(1)">
            {{
              quizzes[numberQuizzes].questions.length - 1 === numberQuestion
                ? 'terminer'
                : 'suivant'
            }}
          </button>
        </div>
        <div>
          <button @click="changerQuiz(-1)">Quiz précédent</button>
          <button @click="changerQuiz(1)">Quiz suivant</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, Ref, ref } from 'vue'
import { useQuizStore } from '../stores/QuizStore'

const score = ref(0)
const done = ref(false)

const numberQuestion = ref(0)
const numberQuizzes = ref(0)

const quizStore = useQuizStore()
const quizzes = quizStore.getQuizzes

const answers = computed(() => quizzes[numberQuizzes.value].questions[numberQuestion.value].answers)

const changValeur = (val: Ref<number>, plus: number, max: number) => {
  if (val.value + plus < 0 || val.value + plus + 1 > max) {
    if (val.value + plus + 1 > max) {
      console.log(done.value)
      done.value = true
    }
    return null
  }
  done.value = false
  val.value += plus
}

const changerQuestion = (plus: number) => {
  if (plus === 1) {
    const radios = document.querySelectorAll('input[type="radio"]')
    radios.forEach((radio) => {
      const input = radio as HTMLInputElement
      if (input.checked) {
        console.log(answers.value[Number(input.value)])
        if (answers.value[Number(input.value)].isCorrect) {
          score.value++
        }
      }
    })
  }
  changValeur(numberQuestion, plus, quizzes[numberQuizzes.value].questions.length)
}

const changerQuiz = (plus: number) => {
  changValeur(numberQuizzes, plus, quizzes.length)
  numberQuestion.value = 0
}
</script>

<style scoped>
.quizzes-view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  border-width: 2rem;
}

button {
  color: hsla(160, 100%, 37%, 0.7);
  background-color: #333;
  border-radius: 0.5vh;
}

.buttons {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2vh;
  margin-top: 2vh;
}

.buttons div {
  display: flex;
  justify-content: space-between;
  gap: 2vh;
}

.answers {
  display: flex;
  justify-content: space-between;
  gap: 2vh;
  margin: 2vh;
}

.quiz-form {
  display: flex;
  flex-direction: column;
  gap: 1vh;
  border: 2px solid #333;
  border-radius: 1vh;
  color: white;
  width: 30vh;
  padding: 10px;
}
</style>
