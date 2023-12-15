import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-road-details-page',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <section>
      <mat-card>
        <mat-card-header> Road works </mat-card-header>
        <mat-card-content>xdsadas</mat-card-content>
      </mat-card>
      <mat-card>
        <mat-card-header>WebCam </mat-card-header>
        <mat-card-content>xdsadas</mat-card-content>
      </mat-card>
      <mat-card>
        <mat-card-header>Parking Lorry </mat-card-header>
        <mat-card-content>xdsadas</mat-card-content>
      </mat-card>
      <mat-card>
        <mat-card-header>Warning </mat-card-header>
        <mat-card-content>xdsadas</mat-card-content>
      </mat-card>
      <mat-card>
        <mat-card-header>Closures </mat-card-header>
        <mat-card-content>xdsadas</mat-card-content>
      </mat-card>
      <mat-card>
        <mat-card-header>Electric Charging Stations </mat-card-header>
        <mat-card-content>xdsadas</mat-card-content>
      </mat-card>
    </section>
  `,
  styleUrl: './road-details-page.component.css',
})
export class RoadDetailsPageComponent {}
