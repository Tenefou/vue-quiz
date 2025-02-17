import { Question } from './Question'

export class Quiz {
  id: number
  title: string
  questions: Question[]

  constructor(id: number, title: string, questions: Question[]) {
    this.id = id
    this.title = title
    this.questions = questions
  }
}
