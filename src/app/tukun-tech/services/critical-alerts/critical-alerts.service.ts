import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Doctor} from "../../model/doctors/doctor.entity";

@Injectable({
  providedIn: 'root'
})
export class CriticalAlertsService {
  baseUrl = 'http://localhost:8080/criticalAlert/v1';

  constructor(private http: HttpClient) { }
  getCriticalAlerts(): Observable<any>{
    return this.http.get(this.baseUrl+'/criticalAlerts')
  }

}
