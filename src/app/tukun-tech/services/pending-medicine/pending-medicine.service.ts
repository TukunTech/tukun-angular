import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Doctor} from "../../model/doctors/doctor.entity";
import {PendingMedicine} from "../../model/pending-medicine/pending-medicine";

export class PendingMedicineService {
  baseUrl = 'http://localhost:8080/api/v1/pendingMedicine';

  constructor(private http: HttpClient) { }

  getMedicineInformation(): Observable<any>{
    return this.http.get(this.baseUrl+'/medicines')
  }

  postMedicineInformation(medicine: PendingMedicine): Observable<any>{
    return this.http.post(this.baseUrl, medicine);
  }
  putMedicine(medicine: PendingMedicine): Observable<any>{
    return this.http.put(this.baseUrl +'/' + medicine.id, medicine);
  }
  deleteMedicine(id: number): Observable<any>{
    return this.http.delete(this.baseUrl+'/'+id);
  }
}
