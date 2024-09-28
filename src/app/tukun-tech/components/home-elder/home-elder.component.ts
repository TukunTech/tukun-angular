import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home-elder',
  standalone: true,
  imports: [MatButtonModule, MatToolbarModule, RouterModule],
  templateUrl: './home-elder.component.html',
  styleUrl: './home-elder.component.css'
})
export class HomeElderComponent {

}
