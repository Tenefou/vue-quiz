import { Answer } from './Answer'

export class Question {
  question: string
  quizId: string
  answers: Answer[]

  constructor(question: string, quizId: string, answers: Answer[]) {
    this.question = question
    this.quizId = quizId
    this.answers = answers
  }
}
