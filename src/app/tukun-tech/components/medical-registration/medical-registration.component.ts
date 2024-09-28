import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {MatToolbar} from "@angular/material/toolbar";
import {RouterLink} from "@angular/router";
import {Doctor} from "../../model/doctors/doctor.entity";
import {DoctorApiService} from "../../services/doctors/doctor-api.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-medical-registration',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatIcon,
    MatInput,
    MatOption,
    MatSelect,
    MatToolbar,
    RouterLink,
    FormsModule
  ],
  templateUrl: './medical-registration.component.html',
  styleUrl: './medical-registration.component.css'
})
export class MedicalRegistrationComponent {
  doctors: Array<Doctor> =[];

  newDoctor: Doctor = {
    id: '',
    name: '',
    lastName: '',
    dni: '',
    age: 0,
    cmpCode: '',
    nationality: '',
    specialization: '',
    contact: ''
  };

  constructor(private DoctorApi: DoctorApiService) { }
  addDoctor(){
    this.DoctorApi.postDoctorInformation(this.newDoctor).subscribe(response => {
      console.log('Doctor added: ', response);
      this.resetForm();
    });
  }

  resetForm() {
    this.newDoctor = {
      id: '',
      name: '',
      lastName: '',
      dni: '',
      age: 0,
      cmpCode: '',
      nationality: '',
      specialization: '',
      contact: ''
    };
  }

}
