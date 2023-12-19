import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

import { ActivatedRoute, Router } from '@angular/router';
import { RoadsService } from '../../services/roads.service';
import { Closure } from '../../interfaces/closure';
import { MatButtonModule } from '@angular/material/button';
import { ListTableComponent } from '../list-table/list-table.component';
import { NoDataComponentComponent } from '../no-data-component/no-data-component.component';
import { Coordinate, DetailsInfo } from '../../interfaces/common';
import { MatDialog } from '@angular/material/dialog';
import { RoadMapComponent } from '../road-map/road-map.component';

@Component({
  selector: 'app-closures-list',
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
      <section *ngIf="closuresList.length == 0">
        <app-no-data-component></app-no-data-component>
      </section>
      <section *ngIf="closuresList.length > 0">
        <section class="buttonSection">
          <button mat-raised-button color="primary" (click)="openDialog()">
            See on Map
          </button>
        </section>
        <app-list-table
          [tableData]="closuresList"
          (detailsClicked)="handleDetailsClick($event)"
        ></app-list-table>
      </section>
    </section>
  `,
  styleUrl: './closures-list.component.css',
})
export class ClosuresListComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  roadService: RoadsService = inject(RoadsService);

  closuresList: Closure[] = [];
  dialog: MatDialog = inject(MatDialog);

  constructor(private router: Router) {
    const roadId = this.route.snapshot.params['id'];
    if (roadId) {
      this.roadService
        .getRoadClosures(roadId)
        .then((resp) => (this.closuresList = resp));
    }
  }

  handleDetailsClick(itemId: string): void {
    this.roadService.getClosureDetails(itemId).then((response) => {
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
    const coords: Coordinate[] = this.closuresList.map((work) => {
      return work.coordinate;
    });
    this.dialog.open(RoadMapComponent, {
      width: '1000px',
      data: coords,
    });
  }
}
