import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {RouterLink} from "@angular/router";

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
export class ElderRemindersComponent {
  pendingMedications = [
    { name: 'Medicine 01', time: '12:00' },
    { name: 'Medicine 01', time: '16:00' },
    { name: 'Medicine 01', time: '19:00' },
    { name: 'Medicine 01', time: '22:00' }
  ];

  takenMedications = [
    { name: 'Medicine 03', time: '09:00', status: 'Earring' }
  ];

}
