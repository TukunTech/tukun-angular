import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {Patient} from "../../model/patients/patient.entity";
import {PatientApiService} from "../../services/patients/patient-api.service";

@Component({
  selector: 'app-post-pat',
  standalone: true,
  imports: [
    MatToolbar,
    MatButton,
    RouterLink,
    MatCard,
    NgForOf,
    MatCardHeader,
    MatCardContent,
    MatIcon,
    MatCardTitle
  ],
  templateUrl: './post-pat.component.html',
  styleUrl: './post-pat.component.css'
})
export class PostPatComponent {
  postPatients:  Array<Patient> = [];
  constructor(private PatientApi: PatientApiService) { }
  getPostPatientsInfo(){
    this.PatientApi.getPatientInformation().subscribe((data: any) => {
      console.log(data);
      this.postPatients = data;
    })
  }
  ngOnInit() {
    this.getPostPatientsInfo();
  }

}
