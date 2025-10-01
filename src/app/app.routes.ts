import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Questions } from './questions/questions';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Profile } from './profile/profile';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'profile', component: Profile },
  { path: 'about', component: About },
  { path: 'questions', component: Questions },
  { path: '**', redirectTo: '' },
];
