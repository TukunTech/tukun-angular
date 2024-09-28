import { Component } from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import {HomeComponent} from "./tukun-tech/components/home/home.component";
import {RegistrationComponent} from "./tukun-tech/components/registration/registration.component";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";
import {LoginComponent} from "./tukun-tech/components/login/login.component";
import {filter} from "rxjs";
import {NgIf} from "@angular/common";
import {UpdateAppointmentsComponent} from "./tukun-tech/components/update-appointments/update-appointments.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RegistrationComponent, MatButton, MatIcon, MatIconButton, MatToolbar, RouterLink, LoginComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  title = 'TukunTech';

  showToolbar: boolean = true;
  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.showToolbar = event.url !== '/login';
      });
  }

  options = [
    { path: '/home', title: 'Home' },
    { path: '/registration', title: 'Registration' },
    { path: '/patient-registration', title: 'Patient Registration' },
    { path: '/patients', title: 'Patients'},
    { path: '/doctors', title: 'Doctors'},
    { path: '/postoperative', title: 'Postoperative Patients'},
    { path: '/icu', title: 'Icu' },
    { path: '/login', title: 'Login' },
    { path: '/create-account', title: 'Create Account' },
    { path: '/medical-registration', title: 'Medical Registration' },
    { path: '/appointments', title: 'Appointments'},
    { path: '/reshedule-appointments', title: 'Reshedule Appointment'},
    { path: '/schedule-appointments', title: 'Schedule Appointment'},
    { path: 'update-appointments' , component: UpdateAppointmentsComponent},
    { path: '/emergency-numbers', title: 'Emergency Numbers'},
    { path: '/home-elder', title: 'Home Elder'},
    { path: '/elder-profile', title: 'Elder Profile'},
    { path: '/elder-reminders', title: 'Elder Reminders'},
    { path: '/technical-support', title: 'Technical Support'},
    { path: '/login-elder', title: 'Login Elder' },
    { path: '/create-elder', title: 'Create Account Elder' },
    { path: '/elder-vital-signs', title: 'Elder Vital Signs'},

  ]
}
