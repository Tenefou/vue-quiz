import { Question } from './Question'

export class Quiz {
  id: string
  title: string
  questions: Question[]

  constructor(id: string, title: string, questions: Question[]) {
    this.id = id
    this.title = title
    this.questions = questions
  }
}
