import { Component, signal } from '@angular/core';
import { UserModel } from '../../models/user';
import { UserService } from '../../services/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  protected currentUser = signal<UserModel | null>(null);

  constructor(private router: Router) {
    try {
      this.currentUser.set(UserService.getActiveUser());
    } catch (e) {
      this.router.navigate(['/login']);
    }
  }
}
