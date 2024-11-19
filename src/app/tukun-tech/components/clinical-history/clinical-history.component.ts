import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Patient} from "../../model/patients/patient.entity";
import {PatientApiService} from "../../services/patients/patient-api.service";
import Swal from "sweetalert2";
import {Gender} from "../../model/patients/gender";
import {BloodType} from "../../model/patients/blood-type";
import {Nationality} from "../../model/patients/nationality";

@Component({
  selector: 'app-history',
  templateUrl: './clinical-history.component.html',
  styleUrls: ['./clinical-history.component.css'],
})

export class ClinicalHistoryComponent implements OnInit {
  patients: Patient[] = [];
  patient: Patient = {
    id : 0,
    name: "",
    lastName: "",
    dni: "",
    age: 0,
    bloodType: {
      id : -1,
      type : "-1",
    },
    nationality: {
      id : -1,
      nationality : "-1",
    },
    gender: {
      id : -1,
      gender : "-1",
    }
  }
  genders : Gender[] = [];
  bloods : BloodType[] = [];
  nations : Nationality[] = [];


  constructor(
    private patientService: PatientApiService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.loadPatient();
  }

  // Load patient data based on ID from the route
  loadPatient(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const patientId = idParam ? Number(idParam) : null;

    if (patientId) {
      this.patientService.getPatientById(patientId).subscribe(
        (data: Patient) => {
          this.patient = data;
        },
        (error) => {
          Swal.fire('Error', 'Failed to load patient data.', 'error');
        }
      );
    } else {
      Swal.fire('Error', 'Invalid patient ID.', 'error');
    }
  }
}
