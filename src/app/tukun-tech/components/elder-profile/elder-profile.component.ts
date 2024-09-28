import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-elder-profile',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './elder-profile.component.html',
  styleUrl: './elder-profile.component.css'
})
export class ElderProfileComponent {
  medications = [
    { name: 'Medication 1 - Docis 1p' },
    { name: 'Medication 2 - Docis 1p' },
    { name: 'Medication 3 - Docis 1p' },
    { name: 'Medication 4 - Docis 1p' }
  ];


  addMedication() {
    this.medications.push({ name: 'New Medication - Docis 1p' });
  }

  deleteMedication(index: number) {
    this.medications.splice(index, 1);
  }

  editMedication(index: number) {

  }
}
