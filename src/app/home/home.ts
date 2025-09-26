import { Component, signal } from '@angular/core';
import { QuestionService } from '../../services/question';
import { Question } from '../../models/question';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected webData = signal<Question[]>([]);
  protected webError = signal<any>(null);

  constructor() {
    QuestionService.getAllAdmissionQuestions()
      .then((res) => this.webData.set(res.data))
      .catch((e) => this.webError.set(e));
  }
}
