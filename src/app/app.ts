import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../services/user';
import { UserModel } from '../models/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('programiranje-korisnickih-interfejsa');

  protected userService = UserService;

  constructor(protected router: Router) {}

  hasAuth() {
    if (!localStorage.getItem('active')) {
      return false;
    }
    return true;
  }

  logout() {
    if (!confirm('Are you sure?')) return;
    this.userService.logout();
    this.router.navigateByUrl('/login');
  }
}
