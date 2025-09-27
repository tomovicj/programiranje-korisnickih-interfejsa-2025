import { Component, signal } from '@angular/core';
import { Question } from '../../models/question';
import { QuestionService } from '../../services/question';
import linkifyHtml from 'linkify-html';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-questions',
  imports: [FormsModule],
  templateUrl: './questions.html',
  styleUrl: './questions.css',
})
export class Questions {
  protected webData = signal<Question[]>([]);
  protected webError = signal<any>(null);
  protected search: string = '';

  constructor() {
    this.loadQuestions();
  }

  loadQuestions() {
    QuestionService.getAdmissionQuestions(this.search)
      .then((res) => this.webData.set(res.data))
      .catch((e) => this.webError.set(e));
  }

  linkify(text: string) {
    return linkifyHtml(text);
  }
}
