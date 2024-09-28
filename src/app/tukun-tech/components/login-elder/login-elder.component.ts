import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-login-elder',
  standalone: true,
  imports: [
    MatButton,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    RouterLink,
    MatLabel
  ],
  templateUrl: './login-elder.component.html',
  styleUrl: './login-elder.component.css'
})
export class LoginElderComponent {
  loginElderForm: FormGroup;

  // No se emplean validaciones aun
  constructor(private fb: FormBuilder) {
    this.loginElderForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  onSubmit() {
    if (this.loginElderForm.valid) {
      const email = this.loginElderForm.get('email')?.value;
      const password = this.loginElderForm.get('password')?.value;
      console.log('Login with:', email, password);
    }
  }
}
