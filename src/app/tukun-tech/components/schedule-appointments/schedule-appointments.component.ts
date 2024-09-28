import { Component } from '@angular/core';
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-schedule-appointments',
  standalone: true,
  imports: [
    MatIcon,
    MatLabel,
    MatCheckbox,
    MatRadioButton,
    MatRadioGroup,
    MatFormField,
    MatSelect,
    MatOption,
    MatInput,
    MatButton,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule
  ],
  templateUrl: './schedule-appointments.component.html',
  styleUrl: './schedule-appointments.component.css'
})
export class ScheduleAppointmentsComponent {

  onClick() {
    alert("Information has been saved!");
  }
}
