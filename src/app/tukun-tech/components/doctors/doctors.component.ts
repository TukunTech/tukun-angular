import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
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
import {Doctor} from "../../model/doctors/doctor.entity";
import {DoctorApiService} from "../../services/doctors/doctor-api.service";

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [
    MatToolbar,
    MatButton,
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
    MatRow,
    MatRowDef,
    MatHeaderRowDef
  ],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent {
  displayedColumns: string[] = ['name', 'area', 'contact', 'professionalCode'];
  doctors: Array<Doctor> =[];
  constructor(private DoctorApi: DoctorApiService) { }
  getDoctorInfo(){
    this.DoctorApi.getDoctorInformation().subscribe((data:any) => {
      console.log(data);
      this.doctors = data;
    })
  }
  ngOnInit() {
    this.getDoctorInfo();
  }

}
