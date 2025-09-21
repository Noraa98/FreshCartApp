import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-regestration',
  imports: [ReactiveFormsModule,NgClass],
  templateUrl: './user-regestration.html',
  styleUrl: './user-regestration.css'
})
export class UserRegestration {
 registerForm: FormGroup;
  submitted = false;
  registeredUser: any = null;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)]],
      mobiles: this.fb.array([
        this.fb.control('', [Validators.required, Validators.pattern(/^01[0-9]{9}$/)])
      ]),
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatch });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  get mobiles(): FormArray {
    return this.registerForm.get('mobiles') as FormArray;
  }

  addMobile() {
    this.mobiles.push(this.fb.control('', [Validators.required, Validators.pattern(/^01[0-9]{9}$/)]));
  }

  removeMobile(i: number) {
    if (i > 0) {
      this.mobiles.removeAt(i);
    }
  }

  passwordMatch(group: AbstractControl) {
    const pass = group.get('password')?.value;
    const confirmPass = group.get('confirmPassword')?.value;
    return pass === confirmPass ? null : { notMatch: true };
  }


  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.registeredUser = this.registerForm.value;
      this.registerForm.reset();
      this.submitted = false;
      this.mobiles.clear();
      this.addMobile();
    }
  }

  onReset() {
    this.registerForm.reset();
    this.submitted = false;
    this.mobiles.clear();
    this.addMobile();
  }
}