import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BloodType} from "../../model/patients/blood-type";
import {Nationality} from "../../model/patients/nationality";
import {Gender} from "../../model/patients/gender";

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  baseUrl = 'http://localhost:8080/api/v1/util';

  constructor(private http: HttpClient) { }


  getBloodType(): Observable<BloodType[]>{
    return this.http.get<BloodType[]>(this.baseUrl+'/listBlood')
  }

  getNationality(): Observable<Nationality[]>{
    return this.http.get<Nationality[]>(this.baseUrl+'/listNationality')
  }

  getGender(): Observable<Gender[]>{
    return this.http.get<Gender[]>(this.baseUrl+'/listGender')
  }



}
