import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useQuizStore = defineStore('quiz', () => {
  const quizzes = ref([])

  const getQuizzes = computed(() => quizzes.value)

  const addQuiz = (quiz) => {
    quizzes.value.push(quiz)
  }
  const deleteQuiz = (quiz) => {
    quizzes.value = quizzes.value.filter((q) => q !== quiz)
  }

  return {
    quizzes,
    getQuizzes,
    addQuiz,
    deleteQuiz,
  }
})
