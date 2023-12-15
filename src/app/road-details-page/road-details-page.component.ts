import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { RoadsService } from '../services/roads.service';
import { RoadWorks } from './../interfaces/road-works';
import { MatListModule } from '@angular/material/list';
import { Webcam } from '../interfaces/webcam';
import { ParkingLorry } from '../interfaces/parking-lorry';
import { Warning } from '../interfaces/warning';
import { Closure } from '../interfaces/closure';
import { ElectricStations } from '../interfaces/electric-stations';

@Component({
  selector: 'app-road-details-page',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  template: `
    <section>
      <mat-card>
        <mat-card-header> Road works </mat-card-header>
        <mat-card-content>
          <mat-list>
            <mat-list-item *ngFor="let work of roadWorks.slice(0, 10)">
              <span matListItemTitle> {{ work.title }}</span>
              <span matListItemLine> {{ work.subtitle }}</span>
            </mat-list-item>
            <mat-action-list>see more btn or something</mat-action-list>
          </mat-list>
        </mat-card-content>
      </mat-card>
      <mat-card>
        <mat-card-header>WebCam </mat-card-header>
        <mat-card-content>
          <mat-list>
            <mat-list-item *ngFor="let webcam of webcamsList.slice(0, 10)">
              <span matListItemTitle> {{ webcam.title }}</span>
              <span matListItemLine> {{ webcam.subtitle }}</span>
            </mat-list-item>
            <mat-action-list>see more btn or something</mat-action-list>
          </mat-list>
        </mat-card-content>
      </mat-card>
      <mat-card>
        <mat-card-header>Parking Lorry </mat-card-header>
        <mat-card-content>
          <mat-list>
            <mat-list-item
              *ngFor="let parking of parkingLorryList.slice(0, 10)"
            >
              <span matListItemTitle> {{ parking.title }}</span>
              <span matListItemLine> {{ parking.subtitle }}</span>
            </mat-list-item>
            <mat-action-list>see more btn or something</mat-action-list>
          </mat-list>
        </mat-card-content>
      </mat-card>
      <mat-card>
        <mat-card-header>Warning</mat-card-header>
        <mat-card-content
          ><mat-list>
            <mat-list-item *ngFor="let warning of warningsList.slice(0, 10)">
              <span matListItemTitle> {{ warning.title }}</span>
              <span matListItemLine> {{ warning.subtitle }}</span>
            </mat-list-item>
            <mat-action-list>see more btn or something</mat-action-list>
          </mat-list>
        </mat-card-content>
      </mat-card>
      <mat-card>
        <mat-card-header>Closures </mat-card-header>
        <mat-card-content>
          <mat-list>
            <mat-list-item *ngFor="let closure of closuresList.slice(0, 10)">
              <span matListItemTitle> {{ closure.title }}</span>
              <span matListItemLine> {{ closure.subtitle }}</span>
            </mat-list-item>
            <mat-action-list>see more btn or something</mat-action-list>
          </mat-list>
        </mat-card-content>
      </mat-card>
      <mat-card>
        <mat-card-header>Electric Charging Stations </mat-card-header>
        <mat-card-content>
          <mat-list>
            <mat-list-item
              *ngFor="let charging of chargingStations.slice(0, 10)"
            >
              <span matListItemTitle> {{ charging.title }}</span>
              <span matListItemLine> {{ charging.subtitle }}</span>
            </mat-list-item>
            <mat-action-list>see more btn or something</mat-action-list>
          </mat-list>
        </mat-card-content>
      </mat-card>
    </section>
  `,
  styleUrl: './road-details-page.component.css',
})
export class RoadDetailsPageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  roadService: RoadsService = inject(RoadsService);
  roadWorks: RoadWorks[] = [];
  webcamsList: Webcam[] = [];
  parkingLorryList: ParkingLorry[] = [];
  warningsList: Warning[] = [];
  closuresList: Closure[] = [];
  chargingStations: ElectricStations[] = [];

  constructor() {
    const roadId = this.route.snapshot.params['id'];
    if (roadId) {
      //TODO UPDATE THIS JUST ONE GET FUNCTION
      this.roadService
        .getRoadServices(roadId)
        .then((response) => (this.roadWorks = response));
      this.roadService
        .getRoadCameras(roadId)
        .then((response) => (this.webcamsList = response));

      this.roadService
        .getParkingLorry(roadId)
        .then((resp) => (this.parkingLorryList = resp));

      this.roadService
        .getRoadWarnings(roadId)
        .then((resp) => (this.warningsList = resp));
      this.roadService
        .getRoadClosures(roadId)
        .then((resp) => (this.closuresList = resp));
      this.roadService
        .getElectricStations(roadId)
        .then((resp) => (this.chargingStations = resp));
    }
  }
}
