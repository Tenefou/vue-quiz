<template>
  <HeaderComponent />
  <main>
    <h1>Create Quiz</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="title">Titre</label>
        <input type="text" id="title" name="title" />
      </div>
      <div class="form-group">
        <label for="title">Question {{ numberQuestion }}</label>
        <input type="text" id="title" name="title" />
        <label for="">Réponse 1</label>
        <input type="text" id="title" name="title" />
        <label for="">Réponse 2</label>
        <input type="text" id="title" name="title" />
        <label for="">Réponse 3</label>
        <input type="text" id="title" name="title" />
      </div>
      <div style="display: flex; gap: 3vh">
        <button @click="handleAdd">Ajouter question</button>
        <button type="submit">Créer quiz</button>
      </div>
    </form>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeaderComponent from '../components/HeaderComponent.vue'

const numberQuestion = ref(1)

const handleAdd = () => {
  numberQuestion.value++
}

const submitForm = () => {
  console.log('submitForm')
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
