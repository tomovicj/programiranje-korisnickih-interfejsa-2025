import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  protected form: FormGroup;

  constructor(private formBuilder: FormBuilder, protected router: Router) {
    this.form = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (!this.form.valid) {
      alert('Invalid form data!');
      return;
    }

    try {
      UserService.login(this.form.value.email, this.form.value.password);
      this.router.navigate(['/profile']);
    } catch(e) {
      alert("Check your login credentials");
    }
    
  }
}
