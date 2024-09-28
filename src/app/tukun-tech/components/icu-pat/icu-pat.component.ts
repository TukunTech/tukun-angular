import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {Patient} from "../../model/patients/patient.entity";
import {PatientApiService} from "../../services/patients/patient-api.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-icu-pat',
  standalone: true,
    imports: [
        MatCard,
        MatCardContent,
        MatCardHeader,
        MatCardTitle,
        NgForOf
    ],
  templateUrl: './icu-pat.component.html',
  styleUrl: './icu-pat.component.css'
})
export class IcuPatComponent {
  icuPatients:  Array<Patient> = [];
  constructor(private PatientApi: PatientApiService) { }
  getIcuPatientsInfo(){
    this.PatientApi.getPatientInformation().subscribe((data: any) => {
      console.log(data);
      this.icuPatients = data;
    })
  }
  ngOnInit() {
    this.getIcuPatientsInfo();
  }
}
