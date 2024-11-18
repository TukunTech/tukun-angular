import {Component, Input, OnInit} from '@angular/core';
import {CommonModule, NgForOf} from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {TechnicalSupport} from "../../model/technicalSupport/technical-support";
import {FormBuilder} from "@angular/forms";
import {TechnicalSupportService} from "../../services/technicalSupport/technical-support.service";

@Component({
  selector: 'app-technical-support',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    RouterLink,
    TranslateModule,
    NgForOf
  ],
  templateUrl: './technical-support.component.html',
  styleUrl: './technical-support.component.css'
})
export class TechnicalSupportComponent implements OnInit{
  technicalSupports: Array<TechnicalSupport> = [];
  supportNumber = 948129421;

  constructor(private technicalApi: TechnicalSupportService) {}

  getTechnicalSupport() {
    this.technicalApi.getTechnicalSupport().subscribe((data: any) => {
      console.log(data);
      this.technicalSupports = data;
    })
  }

  ngOnInit() {
    this.getTechnicalSupport()
  }

}
