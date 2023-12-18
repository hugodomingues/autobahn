import { Component, inject } from '@angular/core';
import { DetailsInfo } from '../../interfaces/common';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  template: `
    <section class="details-container" *ngIf="item">
      <button mat-icon-button (click)="goBack()" color="primary">
        <mat-icon>arrow_back_ios</mat-icon>
      </button>
      <h2>{{ item.title }}</h2>

      <div class="section">
        <h3>Subtitle</h3>
        <p>{{ item.subtitle }}</p>
      </div>

      <div class="section">
        <h3>Description</h3>
        <div *ngFor="let desc of item.description" class="description">
          {{ desc }}
        </div>
      </div>

      <div class="section">
        <h3>Details</h3>
        <p class="coordinate">
          Coordinate: {{ item.coordinate.lat }}, {{ item.coordinate.long }}
        </p>
      </div>

      <div class="section" *ngIf="item.imageUrl">
        <h3>Image</h3>
        <img [src]="item.imageUrl" alt="Image" class="image" />
      </div>
    </section>
  `,
  styleUrl: './details-page.component.css',
})
export class DetailsPageComponent {
  item: DetailsInfo = {
    title: '',
    subtitle: '',
    description: [],
    identifier: '',
    coordinate: {
      lat: '',
      long: '',
    },
  };

  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = new Router();
  constructor(private location: Location) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['detailsData']) {
        this.item = JSON.parse(params['detailsData']);
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}
