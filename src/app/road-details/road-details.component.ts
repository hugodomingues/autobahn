import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RoadDetailsPageComponent } from '../road-details-page/road-details-page.component';
import { RoadMapComponent } from '../road-map/road-map.component';

@Component({
  selector: 'app-road-details',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    RoadDetailsPageComponent,
    RoadMapComponent,
  ],
  template: `
    <mat-tab-group>
      <mat-tab label="Details">
        <app-road-details-page></app-road-details-page>
      </mat-tab>
      <mat-tab label="Map">
        <app-road-map></app-road-map>
      </mat-tab>
    </mat-tab-group>
  `,
  styleUrl: './road-details.component.css',
})
export class RoadDetailsComponent {}
