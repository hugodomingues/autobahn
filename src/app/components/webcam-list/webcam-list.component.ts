import { Component, inject } from '@angular/core';
import { Webcam } from '../../interfaces/webcam';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute } from '@angular/router';
import { RoadsService } from '../../services/roads.service';

@Component({
  selector: 'app-webcam-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  template: `
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
  `,
  styleUrl: './webcam-list.component.css',
})
export class WebcamListComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  roadService: RoadsService = inject(RoadsService);
  webcamsList: Webcam[] = [];

  constructor() {
    const roadId = this.route.snapshot.params['id'];
    if (roadId) {
      this.roadService
        .getRoadCameras(roadId)
        .then((response) => (this.webcamsList = response));
    }
  }
}
