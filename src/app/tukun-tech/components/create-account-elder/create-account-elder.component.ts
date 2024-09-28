import { Component } from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-create-account-elder',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatButton,
    RouterLink,
    MatLabel
  ],
  templateUrl: './create-account-elder.component.html',
  styleUrl: './create-account-elder.component.css'
})
export class CreateAccountElderComponent {
  createAccountElderForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicializa el formulario sin validaciones
    this.createAccountElderForm = this.fb.group({
      name: [''],
      ruc: [''],
      email: [''],
      number: [''],
      city: [''],
      password: ['']
    });
  }

  ngOnInit() {}

  onSubmit() {
    console.log(this.createAccountElderForm.value); // Maneja el envío del formulario
  }
}
