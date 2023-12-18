import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RoadWorksListComponent } from '../road-works-list/road-works-list.component';
import { WebcamListComponent } from '../webcam-list/webcam-list.component';
import { ParkingLorriesListComponent } from '../parking-lorries-list/parking-lorries-list.component';
import { WarningsListComponent } from '../warnings-list/warnings-list.component';
import { ClosuresListComponent } from '../closures-list/closures-list.component';
import { ChargingStationsListComponent } from '../charging-stations-list/charging-stations-list.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-road-details',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    RoadWorksListComponent,
    WebcamListComponent,
    ParkingLorriesListComponent,
    WarningsListComponent,
    ClosuresListComponent,
    ChargingStationsListComponent,
    RouterLink,
    MatButtonModule,
    MatIconModule,
  ],
  template: `
    <section>
      <section class="header">
        <button mat-icon-button (click)="goBack()" color="primary">
          <mat-icon
            aria-hidden="false"
            aria-label="Arrow back"
            fontIcon="arrow_back_ios"
          ></mat-icon>
        </button>
        <h3 class="text">
          You can check all the info of {{ routeName }} and also you can see the
          information on a map!
        </h3>
      </section>
      <section>
        <mat-tab-group>
          <mat-tab label="Road Works">
            <app-road-works-list></app-road-works-list>
          </mat-tab>
          <mat-tab label="Webcams">
            <app-webcam-list></app-webcam-list>
          </mat-tab>
          <mat-tab label="Parking Lorries">
            <app-parking-lorries-list></app-parking-lorries-list>
          </mat-tab>
          <mat-tab label="Warnings">
            <app-warning-list></app-warning-list>
          </mat-tab>
          <mat-tab label="Closures">
            <app-closures-list></app-closures-list>
          </mat-tab>
          <mat-tab label="Electric Charging Stations">
            <app-charging-stations-list></app-charging-stations-list>
          </mat-tab>
        </mat-tab-group>
      </section>
    </section>
  `,
  styleUrl: './road-details.component.css',
})
export class RoadDetailsComponent {
  router: Router = new Router();
  route: ActivatedRoute = inject(ActivatedRoute);
  routeName: string = '';

  constructor() {
    const roadId = this.route.snapshot.params['id'];
    if (roadId) this.routeName = roadId;
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
