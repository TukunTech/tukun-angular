import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Doctor} from "../../model/doctors/doctor.entity";

@Injectable({
  providedIn: 'root'
})
export class DoctorApiService {
  baseUrl = `https://tukun-tech1.free.beeceptor.com/api/doctors`;

  constructor(private http: HttpClient) { }
  getDoctorInformation(){
    return this.http.get(`https://tukun-tech1.free.beeceptor.com/api/doctors`)
  }
  postDoctorInformation(doctor: Doctor){
    return this.http.post(`https://tukun-tech1.free.beeceptor.com/api/doctors`, doctor);
  }

}
