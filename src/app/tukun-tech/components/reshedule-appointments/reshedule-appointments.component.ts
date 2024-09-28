import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/core";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatSelect} from "@angular/material/select";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-reshedule-appointments',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    MatOption,
    MatRadioButton,
    MatRadioGroup,
    MatSelect,
    RouterLink
  ],
  templateUrl: './reshedule-appointments.component.html',
  styleUrl: './reshedule-appointments.component.css'
})
export class ResheduleAppointmentsComponent {

}
