import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  imports: [ReactiveFormsModule,NgClass],
  templateUrl: './user-login.html',
  styleUrl: './user-login.css'
})
export class UserLogin {
 loginForm: FormGroup;
  submitted = false;
  loggedUser: any = null;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.loggedUser = this.loginForm.value;
      this.loginForm.reset();
      this.submitted = false;
    }
  }

  onReset() {
    this.loginForm.reset();
    this.submitted = false;
  }
}
