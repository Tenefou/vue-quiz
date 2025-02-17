<template>
  <HeaderComponent />
  <main>
    <h1>Create Quiz</h1>
    <form>
      <div class="form-group">
        <label for="title">Titre</label>
        <input type="text" id="title" name="title" v-model="title" />
      </div>
      <div class="form-group">
        <label for="title">Question {{ numberQuestion }}</label>
        <input type="text" id="question" name="question" v-model="intitule" />
        <label for="">Réponse 1</label>
        <input type="text" id="answer1" name="answer1" v-model="answersString[0]" />
        <label for="">Réponse 2</label>
        <input type="text" id="answer2" name="answer2" v-model="answersString[1]" />
        <label for="">Réponse 3</label>
        <input type="text" id="answer3" name="answer3" v-model="answersString[2]" />
      </div>
      <div style="display: flex; gap: 3vh">
        <button @click="handleAdd" type="button">Ajouter question</button>
        <button @click="handleSubmit" type="submit">Créer quiz</button>
      </div>
    </form>
    <div>{{ questions }}</div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeaderComponent from '../components/HeaderComponent.vue'
import { useQuizStore } from '../stores/quizStore'
import { Quiz } from '../models/Quiz'
import { Question } from '../models/Question'
import { Answer } from '../models/Answer'

const quizStore = useQuizStore()

const numberQuestion = ref(1)

const questions = ref<Question[]>([])

const title = ref('')

const intitule = ref('')

const answersString = ref<string[]>(['', '', ''])

const handleAdd = () => {
  const answers = answersString.value.map((answer) => new Answer(answer, true))

  const newQuestion = new Question(intitule.value, numberQuestion.value.toString(), answers)

  questions.value.push(newQuestion)
}

const handleSubmit = () => {
  console.log(questions.value)
  const newQuiz = new Quiz(quizStore.getQuizId(), title.value, questions.value)
  quizStore.addQuiz(newQuiz)
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 5vh;
}

.form-group {
  display: flex;
  flex-direction: column;
}
</style>
