import { Category } from './category';

export interface Question {
  questionId: number;
  text: string;
  answer: string;
  intent: string;
  createdAt: string;
  updatedAt: string;
  categoryId: number;
  category: Category;
}
