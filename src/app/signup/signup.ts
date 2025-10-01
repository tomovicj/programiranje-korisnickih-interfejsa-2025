import { Component, signal } from '@angular/core';
import { MainService } from '../../services/main';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  protected form: FormGroup;
  protected destinations = signal<string[]>([]);

  constructor(private formBuilder: FormBuilder, protected router: Router) {
    this.form = formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      password: ['', [Validators.required]],
      repeatPassword: ['', [Validators.required]],
      favoriteDestination: ['', [Validators.required]],
    });

    MainService.getDestinations().then((res) => this.destinations.set(res.data));
  }

  onSubmit() {
    if (this.form.valid) {
      return;
    }

    // Ako je email vec zauzet
    try {
      const x = UserService.findUserByEmail(this.form.value.email);
      return;
    } catch {}

    if (this.form.value.password !== this.form.value.repeatPassword) {
      return;
    }

    UserService.signup(this.form.value);
    this.router.navigateByUrl('/profile');
  }
}
