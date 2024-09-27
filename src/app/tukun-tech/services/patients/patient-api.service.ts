import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Patient} from "../../model/patients/patient.entity";

@Injectable({
  providedIn: 'root'
})
export class PatientApiService {
  baseUrl = 'https://tukun-tech1.free.beeceptor.com/api/patients';

  constructor(private http: HttpClient) { }
  getPatientInformation(){
    return this.http.get(`https://tukun-tech1.free.beeceptor.com/api/patients`)
  }
  postPatientInformation(patient: Patient){
    return this.http.post(`https://tukun-tech1.free.beeceptor.com/api/patients`, patient);
  }
}
