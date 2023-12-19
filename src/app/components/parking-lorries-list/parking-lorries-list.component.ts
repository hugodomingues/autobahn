import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

import { ParkingLorry } from '../../interfaces/parking-lorry';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RoadsService } from '../../services/roads.service';
import { MatButtonModule } from '@angular/material/button';
import { ListTableComponent } from '../list-table/list-table.component';
import { NoDataComponentComponent } from '../no-data-component/no-data-component.component';
import { Coordinate, DetailsInfo } from '../../interfaces/common';
import { RoadMapComponent } from '../road-map/road-map.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-parking-lorries-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    ListTableComponent,
    NoDataComponentComponent,
  ],
  template: `
    <section>
      <section *ngIf="parkingLorryList.length == 0">
        <app-no-data-component></app-no-data-component>
      </section>
      <section *ngIf="parkingLorryList.length > 0">
        <section class="buttonSection">
          <button mat-raised-button color="primary" (click)="openDialog()">
            See on Map
          </button>
        </section>
        <app-list-table
          [tableData]="parkingLorryList"
          (detailsClicked)="handleDetailsClick($event)"
        ></app-list-table>
      </section>
    </section>
  `,
  styleUrl: './parking-lorries-list.component.css',
})
export class ParkingLorriesListComponent {
  parkingLorryList: ParkingLorry[] = [];
  route: ActivatedRoute = inject(ActivatedRoute);
  roadService: RoadsService = inject(RoadsService);
  dialog: MatDialog = inject(MatDialog);

  constructor(private router: Router) {
    const roadId = this.route.snapshot.params['id'];
    if (roadId) {
      this.roadService
        .getParkingLorry(roadId)
        .then((resp) => (this.parkingLorryList = resp));
    }
  }

  handleDetailsClick(itemId: string): void {
    this.roadService.getParkingDetails(itemId).then((response) => {
      const dataToReturn: DetailsInfo = {
        title: response.title,
        subtitle: response.subtitle,
        description: response.description,
        identifier: response.identifier,
        coordinate: response.coordinate,
      };

      this.router.navigate(['/details-page'], {
        queryParams: { detailsData: JSON.stringify(dataToReturn) },
      });
    });
  }

  openDialog() {
    const coords: Coordinate[] = this.parkingLorryList.map((work) => {
      return work.coordinate;
    });
    this.dialog.open(RoadMapComponent, {
      width: '1000px',
      data: coords,
    });
  }
}
