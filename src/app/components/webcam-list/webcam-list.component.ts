import { Component, inject } from '@angular/core';
import { Webcam } from '../../interfaces/webcam';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute, Router } from '@angular/router';
import { RoadsService } from '../../services/roads.service';
import { ListTableComponent } from '../list-table/list-table.component';
import { MatButtonModule } from '@angular/material/button';
import { NoDataComponentComponent } from '../no-data-component/no-data-component.component';
import { Coordinate, DetailsInfo } from '../../interfaces/common';
import { MatDialog } from '@angular/material/dialog';
import { RoadMapComponent } from '../road-map/road-map.component';

@Component({
  selector: 'app-webcam-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    ListTableComponent,
    MatButtonModule,
    NoDataComponentComponent,
  ],
  template: `
    <section>
      <section *ngIf="webcamsList.length == 0">
        <app-no-data-component></app-no-data-component>
      </section>
      <section *ngIf="webcamsList.length > 0">
        <section class="buttonSection">
          <button mat-raised-button color="primary" (click)="openDialog()">
            See on Map
          </button>
        </section>
        <app-list-table
          [tableData]="webcamsList"
          (detailsClicked)="handleDetailsClick($event)"
        ></app-list-table>
      </section>
    </section>
  `,
  styleUrl: './webcam-list.component.css',
})
export class WebcamListComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  roadService: RoadsService = inject(RoadsService);
  webcamsList: Webcam[] = [];

  dialog: MatDialog = inject(MatDialog);

  constructor(private router: Router) {
    const roadId = this.route.snapshot.params['id'];
    if (roadId) {
      this.roadService
        .getRoadCameras(roadId)
        .then((response) => (this.webcamsList = response));
    }
  }

  handleDetailsClick(itemId: string): void {
    this.roadService.getWebcamDetails(itemId).then((response) => {
      const dataToReturn: DetailsInfo = {
        title: response.title,
        subtitle: response.subtitle,
        description: response.description,
        identifier: response.identifier,
        coordinate: response.coordinate,
        imageUrl: response.imageurl,
      };

      this.router.navigate(['/details-page'], {
        queryParams: { detailsData: JSON.stringify(dataToReturn) },
      });
    });
  }

  openDialog() {
    const coords: Coordinate[] = this.webcamsList.map((work) => {
      return work.coordinate;
    });
    this.dialog.open(RoadMapComponent, {
      width: '1000px',
      data: coords,
    });
  }
}
