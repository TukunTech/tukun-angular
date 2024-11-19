import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Elder} from "../../../../../../../tukun-angular/src/app/tukun-tech/model/elders/elder.entity";
import {Observable} from "rxjs";
import {Patient} from "../../../../../../../tukun-angular/src/app/tukun-tech/model/patients/patient.entity";
@Injectable({
  providedIn: 'root'
})
export class ElderApiService {
  baseUrl='http://localhost:8080/api/v1/elders';
  constructor(private http:HttpClient) { }
  getElder(): Observable<any>{
    return this.http.get(this.baseUrl+'/elders')
  }
  postElder(elder: Elder): Observable<any>{
    return this.http.post(this.baseUrl, elder)
  }
  putElder(elder: Elder): Observable<any>{
    return this.http.put(this.baseUrl, elder);
  }

  deleteElder(id: number): Observable<any>{
    return this.http.delete(this.baseUrl+'/'+id);
  }
}
