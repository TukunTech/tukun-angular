import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgForOf } from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-emergency-numbers',
  templateUrl: './emergency-numbers.component.html',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    NgForOf,
    RouterLink
  ],
  styleUrls: ['./emergency-numbers.component.css']
})

export class EmergencyNumbersComponent {
  familyContacts = [
    { name: 'San Carlos', phone: '123456789' },
    { name: 'Daughter Maria', phone: '123456789' },
    { name: 'Grandson Miguel', phone: '123456789' },
    { name: '', phone: '123456789' }
  ];

  emergencyNumbers = [
    { type: 'Hospital', phone: '123456789' },
    { type: 'Ambulance', phone: '123456789' },
    { type: 'Police', phone: '123456789' },
    { type: 'Private Physician', phone: '123456789' }
  ];

}

