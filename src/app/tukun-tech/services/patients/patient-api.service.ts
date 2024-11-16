import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Patient} from "../../model/patients/patient.entity";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PatientApiService {
  baseUrl = 'http://localhost:8080/api/v1/patients';

  constructor(private http: HttpClient) { }


  getPatient(): Observable<any>{
    return this.http.get(this.baseUrl+'/patients')
  }

  postPatient(patient: Patient): Observable<any>{
    return this.http.post(this.baseUrl, patient);
  }

  putPatient(patient: Patient): Observable<any>{
    return this.http.put(this.baseUrl, patient);
  }


  deletePatient(id: number): Observable<any>{
    return this.http.delete(this.baseUrl+'/'+id);
  }

}

