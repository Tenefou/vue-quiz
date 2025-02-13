import { Question } from './Question'

export class Quiz {
  id: string
  Questions: Question[]

  constructor(id: string, Questions: Question[]) {
    this.id = id
    this.Questions = Questions
  }
}
