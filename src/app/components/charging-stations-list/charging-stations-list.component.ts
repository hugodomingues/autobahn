import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { RoadsService } from '../../services/roads.service';
import { ElectricStations } from '../../interfaces/electric-stations';

@Component({
  selector: 'app-charging-stations-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  template: `
    <mat-card>
      <mat-card-header>Electric Charging Stations </mat-card-header>
      <mat-card-content>
        <mat-list>
          <mat-list-item *ngFor="let charging of chargingStations.slice(0, 10)">
            <span matListItemTitle> {{ charging.title }}</span>
            <span matListItemLine> {{ charging.subtitle }}</span>
          </mat-list-item>
          <mat-action-list>see more btn or something</mat-action-list>
        </mat-list>
      </mat-card-content>
    </mat-card>
  `,
  styleUrl: './charging-stations-list.component.css',
})
export class ChargingStationsListComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  roadService: RoadsService = inject(RoadsService);

  chargingStations: ElectricStations[] = [];

  constructor() {
    const roadId = this.route.snapshot.params['id'];
    if (roadId) {
      this.roadService
        .getElectricStations(roadId)
        .then((resp) => (this.chargingStations = resp));
    }
  }
}
