import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RoadWorksListComponent } from '../road-works-list/road-works-list.component';
import { WebcamListComponent } from '../webcam-list/webcam-list.component';
import { ParkingLorriesListComponent } from '../parking-lorries-list/parking-lorries-list.component';
import { WarningsListComponent } from '../warnings-list/warnings-list.component';
import { ClosuresListComponent } from '../closures-list/closures-list.component';
import { ChargingStationsListComponent } from '../charging-stations-list/charging-stations-list.component';

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
  ],
  template: `
    <section>
      <section>Some text to say we are see the details of some route</section>
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
            <app-warning-list></app-warning-list>
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
export class RoadDetailsComponent {}
