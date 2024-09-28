import {Component, OnInit} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatButton,
    RouterLink,
    MatLabel,
  ],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent implements OnInit {
  createForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicializa el formulario sin validacione
    this.createForm = this.fb.group({
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
    console.log(this.createForm.value); // Maneja el envío del formulario
  }
}
