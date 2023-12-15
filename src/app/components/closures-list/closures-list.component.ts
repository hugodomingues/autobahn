import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { RoadsService } from '../../services/roads.service';
import { Closure } from '../../interfaces/closure';

@Component({
  selector: 'app-closures-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  template: `
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
  `,
  styleUrl: './closures-list.component.css',
})
export class ClosuresListComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  roadService: RoadsService = inject(RoadsService);

  closuresList: Closure[] = [];

  constructor() {
    const roadId = this.route.snapshot.params['id'];
    if (roadId) {
      this.roadService
        .getRoadClosures(roadId)
        .then((resp) => (this.closuresList = resp));
    }
  }
}
