import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {Patient} from "../../model/patients/patient.entity";
import {PatientApiService} from "../../services/patients/patient-api.service";

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [
    MatToolbar,
    MatButton,
    RouterLink,
    MatInput,
    MatIconButton,
    MatIcon,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef
  ],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.css'
})
export class PatientsComponent {
  displayedColumns: string[] = ['name', 'age', 'bedNumber', 'insurance'];
  patients: Array<Patient> = [];
  constructor(private PatientApi: PatientApiService) { }
  getPatientInfo(){
    this.PatientApi.getPatientInformation().subscribe((data:any) => {
      console.log(data);
      this.patients = data;
    })
  }
  ngOnInit() {
    this.getPatientInfo();
  }

}
