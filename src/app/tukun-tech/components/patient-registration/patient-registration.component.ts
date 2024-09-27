import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatIcon} from "@angular/material/icon";
import {Patient} from "../../model/patients/patient.entity";
import {PatientApiService} from "../../services/patients/patient-api.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-patient-registration',
  standalone: true,
  imports: [
    MatToolbar,
    MatButton,
    RouterLink,
    MatFormField,
    MatInput,
    MatSelect,
    MatOption,
    MatIcon,
    MatLabel,
    FormsModule
  ],
  templateUrl: './patient-registration.component.html',
  styleUrl: './patient-registration.component.css'
})
export class PatientRegistrationComponent {
  patients: Array<Patient> = [];
  newPatient: Patient = {
    id : '',
    name : '',
    lastName : '',
    dni : '',
    age : 0,
    bloodType : '',
    nationality : '',
    noOfPolicies : '',
    insurance: '',
    bedNumber : '',
    allergies : '',
    hr : 0,
    nipb : {
      sys: 0,
      dia: 0
    },
    spO2 : 0,
    temp : 0,
  };

  constructor(private PatientApi: PatientApiService) {  }
  addPatient(){
    this.PatientApi.postPatientInformation(this.newPatient).subscribe(response =>{
      console.log('Patient added: ', response);
      this.resetForm();
    });
  }

  resetForm(){
    this.newPatient = {
      id : '',
      name : '',
      lastName : '',
      dni : '',
      age : 0,
      bloodType : '',
      nationality : '',
      noOfPolicies : '',
      insurance: '',
      bedNumber : '',
      allergies : '',
      hr : 0,
      nipb : {
        sys: 0,
        dia: 0
      },
      spO2 : 0,
      temp : 0,
    };
  }

}
