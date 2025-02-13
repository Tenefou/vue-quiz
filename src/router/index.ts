import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuizzesView from '../views/QuizzesView.vue'
import ManageView from '../views/ManageView.vue'
import CreateView from '../views/CreateView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/quizzes',
      name: 'quizzes',
      component: QuizzesView,
    },
    {
      path: '/manage',
      name: 'manage',
      component: ManageView,
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView,
    },
  ],
})

export default router
