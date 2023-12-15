import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RoadsService } from '../services/roads.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    RouterLink,
  ],
  template: `
    <section class="results">
      <mat-grid-list cols="2" rowHeight="400px">
        <mat-grid-tile *ngFor="let road of roads" (click)="goToDetails(road)">
          <div class="roadDetails">
            <h1 class="roadName">{{ road }}</h1>
            <a [routerLink]="['/details', road]" class="detailsText"
              >See details</a
            >
          </div>
        </mat-grid-tile>
      </mat-grid-list>
    </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  roads: string[] = [];
  roadService: RoadsService = inject(RoadsService);
  constructor() {
    this.roadService.getAllRoads().then((result: string[]) => {
      this.roads = result;
    });
  }

  goToDetails(roadID: string) {
    console.log(roadID);
  }
}
