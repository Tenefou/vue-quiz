import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { Quiz } from '../models/Quiz'

export const useQuizStore = defineStore(
  'quiz',
  () => {
    const quizzes = ref<Quiz[]>([])

    const quizId = ref(1)

    const getQuizzes = computed(() => quizzes.value)

    const addQuiz = (quiz: Quiz) => {
      quizzes.value.push(quiz)
    }

    const deleteQuiz = (quiz: Quiz) => {
      quizzes.value = quizzes.value.filter((q) => q !== quiz)
    }

    const getQuizId = () => {
      return (quizId.value += 1)
    }

    return {
      quizzes,
      quizId,
      getQuizzes,
      getQuizId,
      addQuiz,
      deleteQuiz,
    }
  },
  {
    persist: {
      storage: localStorage,
    },
  },
)
