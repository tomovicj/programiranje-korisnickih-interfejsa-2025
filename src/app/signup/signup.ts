import { Component, signal } from '@angular/core';
import { MainService } from '../../services/main';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  protected form: FormGroup;
  protected destinations = signal<string[]>([]);

  constructor(private formBuilder: FormBuilder) {
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
    console.log(this.form.valid);
    console.log(this.form.value);
  }
}
