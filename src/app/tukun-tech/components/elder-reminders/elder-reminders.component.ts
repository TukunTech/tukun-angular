import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {RouterLink} from "@angular/router";
import {PendingMedicine} from "../../model/pending-medicine/pending-medicine";
import {PendingMedicineService} from "../../services/pending-medicine/pending-medicine.service";
import Swal from "sweetalert2";


@Component({
  selector: 'app-elder-reminders',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    RouterLink
  ],
  templateUrl: './elder-reminders.component.html',
  styleUrl: './elder-reminders.component.css'
})
export class ElderRemindersComponent implements OnInit {
 pendingMedicines: PendingMedicine[] = [];


  constructor(private pendingMedicineService: PendingMedicineService) {}

  ngOnInit(): void{
  this.getPendingMedicines();
  }

  getPendingMedicines(){
    this.pendingMedicineService.getMedicine().subscribe(
      el => this.pendingMedicines = el
    )
  }

  deletePendingMedicines(obj: PendingMedicine){

    Swal.fire({
      title: '¿Desea eliminar?',
      text: "Los cambios no se van a revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, elimina.',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if(result.isConfirmed){
        this.pendingMedicineService.deleteMedicine(obj.id || 0).subscribe(
          x => {
            Swal.fire('Medicina Pendiente eliminada', x.mensaje, 'success');
            this.pendingMedicineService.getMedicine().subscribe(
              x => this.pendingMedicines = x
            );
          }
        );
      }
    })




  }


}
