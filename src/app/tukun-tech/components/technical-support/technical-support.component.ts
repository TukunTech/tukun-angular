import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-technical-support',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    RouterLink
  ],
  templateUrl: './technical-support.component.html',
  styleUrl: './technical-support.component.css'
})
export class TechnicalSupportComponent {
  faqs = ['Question 1', 'Question 2', 'Question 3', 'Question 4'];
  supportNumber = '1234567890';

}
