import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RoadsService } from '../../services/roads.service';
import { RoadWorks } from '../../interfaces/road-works';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-road-works-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule, RouterLink],
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
    </section>
  `,
  styleUrl: './road-works-list.component.css',
})
export class RoadWorksListComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  roadService: RoadsService = inject(RoadsService);
  roadWorks: RoadWorks[] = [];

  constructor() {
    const roadId = this.route.snapshot.params['id'];
    if (roadId) {
      this.roadService
        .getRoadServices(roadId)
        .then((response) => (this.roadWorks = response));
    }
  }
}
