import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

import { ParkingLorry } from '../../interfaces/parking-lorry';
import { ActivatedRoute } from '@angular/router';
import { RoadsService } from '../../services/roads.service';

@Component({
  selector: 'app-parking-lorries-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  template: `
    <mat-card>
      <mat-card-header>Parking Lorry </mat-card-header>
      <mat-card-content>
        <mat-list>
          <mat-list-item *ngFor="let parking of parkingLorryList.slice(0, 10)">
            <span matListItemTitle> {{ parking.title }}</span>
            <span matListItemLine> {{ parking.subtitle }}</span>
          </mat-list-item>
          <mat-action-list> xd </mat-action-list>
        </mat-list>
      </mat-card-content>
    </mat-card>
  `,
  styleUrl: './parking-lorries-list.component.css',
})
export class ParkingLorriesListComponent {
  parkingLorryList: ParkingLorry[] = [];
  route: ActivatedRoute = inject(ActivatedRoute);
  roadService: RoadsService = inject(RoadsService);

  constructor() {
    const roadId = this.route.snapshot.params['id'];
    if (roadId) {
      this.roadService
        .getParkingLorry(roadId)
        .then((resp) => (this.parkingLorryList = resp));
    }
  }
}
