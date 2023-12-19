import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

import { ActivatedRoute, Router } from '@angular/router';
import { RoadsService } from '../../services/roads.service';
import { Warning } from '../../interfaces/warning';
import { MatButtonModule } from '@angular/material/button';
import { ListTableComponent } from '../list-table/list-table.component';
import { NoDataComponentComponent } from '../no-data-component/no-data-component.component';
import { Coordinate, DetailsInfo } from '../../interfaces/common';
import { MatDialog } from '@angular/material/dialog';
import { RoadMapComponent } from '../road-map/road-map.component';

@Component({
  selector: 'app-warning-list',
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
      <section *ngIf="warningsList.length == 0">
        <app-no-data-component></app-no-data-component>
      </section>
      <section *ngIf="warningsList.length > 0">
        <section class="buttonSection">
          <button mat-raised-button color="primary" (click)="openDialog()">
            See on Map
          </button>
        </section>
        <app-list-table
          [tableData]="warningsList"
          (detailsClicked)="handleDetailsClick($event)"
        ></app-list-table>
      </section>
    </section>
  `,
  styleUrl: './warnings-list.component.css',
})
export class WarningsListComponent {
  warningsList: Warning[] = [];
  route: ActivatedRoute = inject(ActivatedRoute);
  roadService: RoadsService = inject(RoadsService);
  dialog: MatDialog = inject(MatDialog);

  constructor(private router: Router) {
    const roadId = this.route.snapshot.params['id'];
    if (roadId) {
      this.roadService
        .getRoadWarnings(roadId)
        .then((resp) => (this.warningsList = resp));
    }
  }

  handleDetailsClick(itemId: string): void {
    this.roadService.getWarningDetails(itemId).then((response) => {
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
    const coords: Coordinate[] = this.warningsList.map((work) => {
      return work.coordinate;
    });
    this.dialog.open(RoadMapComponent, {
      width: '1000px',
      data: coords,
    });
  }
}
