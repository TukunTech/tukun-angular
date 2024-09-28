import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-elder-vital-signs',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './elder-vital-signs.component.html',
  styleUrl: './elder-vital-signs.component.css'
})
export class ElderVitalSignsComponent {
  patientName = 'Emilia Altamirano Gavidia';


  vitalSigns = {
    heartRate: 62,
    bloodPressure: {
      systolic: 112,
      diastolic: 75
    },
    oxygenSaturation: 98,
    temperature: 36.7
  };
}
