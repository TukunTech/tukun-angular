import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from "@angular/material/card";
import { NgForOf } from "@angular/common";
import { ElderBedService } from "../../services/elders/elderbed.service";
import { TranslateModule } from "@ngx-translate/core";
import { ElderBed } from "../../model/elders/elderbed";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-elder-vital-signs',
  standalone: true,
  imports: [
    CommonModule,
    MatCard,
    MatCardContent,
    MatCardTitle,
    NgForOf,
    TranslateModule,
    MatIcon
  ],
  templateUrl: './elder-vital-signs.component.html',
  styleUrls: ['./elder-vital-signs.component.css']
})
export class ElderVitalSignsComponent implements OnInit {
  elderbeds: ElderBed[] = []; // Almacenará los datos

  constructor(private elderBedService: ElderBedService) {}

  ngOnInit(): void {
    this.consultaelder();
  }

  consultaelder() {
    this.elderBedService.getelderBeds().subscribe(
      el => this.elderbeds = el
    )
  }


}
