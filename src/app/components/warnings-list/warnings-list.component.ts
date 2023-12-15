import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { RoadsService } from '../../services/roads.service';
import { Warning } from '../../interfaces/warning';

@Component({
  selector: 'app-warning-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  template: `
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
  `,
  styleUrl: './warnings-list.component.css',
})
export class WarningsListComponent {
  warningsList: Warning[] = [];
  route: ActivatedRoute = inject(ActivatedRoute);
  roadService: RoadsService = inject(RoadsService);

  constructor() {
    const roadId = this.route.snapshot.params['id'];
    if (roadId) {
      this.roadService
        .getRoadWarnings(roadId)
        .then((resp) => (this.warningsList = resp));
    }
  }
}
