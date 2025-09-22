import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth-service';

@Component({
  selector: 'app-user-login',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './user-login.html',
  styleUrl: './user-login.css',
})
export class UserLogin {
  loginForm: FormGroup;
  submitted = false;
  loggedUser: any = null;
  loading = false;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.errorMessage = null;

    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      this.loading = true;

      this.authService.login(username, password).subscribe({
        next: (response) => {
          console.log('Login successful', response);
          // التأكد من نجاح الـ login قبل التوجه
          if (response && response.token) {
            this.router.navigate(['/productSearch']);
          }
        },
        error: (err) => {
          console.error('Login failed:', err);
          this.errorMessage = err.error?.message || 'Invalid username or password';
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
          if (this.authService.isLoggedIn()) {
            this.loginForm.reset();
            this.submitted = false;
          }
        },
      });
    }
  }

  onReset() {
    this.loginForm.reset();
    this.submitted = false;
    this.errorMessage = null;
  }
}
