import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TechnicalSupport} from "../../model/technicalSupport/technical-support";

@Injectable({
  providedIn: 'root'
})
export class TechnicalSupportService {
  baseUrl = 'http://localhost:8080/soporte/v1';

  constructor(private http: HttpClient) {}

  getTechnicalSupport(): Observable<any> {
    return this.http.get(this.baseUrl + '/faqs');
  }

  postTechnicalSupport(technicalSupport: TechnicalSupport): Observable<any>{
    return this.http.post(this.baseUrl, technicalSupport);
  }



}
