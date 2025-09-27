import axios from 'axios';
import { Question } from '../models/question';

const client = axios.create({
  baseURL: 'https://rasa.singidunum.ac.rs/api/question',
  headers: {
    Accept: 'application/json',
    'X-Name': 'PKI/2025',
    'X-Token': '70b58a3d-4771-4092-8d01-2dcd08e5ad90',
  },
  validateStatus: (staus: number) => staus === 200,
});

export class QuestionService {
  static async getAdmissionQuestions(search?: string) {
    return await client.get<Question[]>(`/category/upis?search=${search}`);
  }
}
