import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { RoadsService } from '../../services/roads.service';
import { RoadWorks } from '../../interfaces/road-works';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { ListTableComponent } from '../list-table/list-table.component';
import { NoDataComponentComponent } from '../no-data-component/no-data-component.component';
import { Coordinate, DetailsInfo } from '../../interfaces/common';
import { RoadMapComponent } from '../road-map/road-map.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-road-works-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    RouterLink,
    MatButtonModule,
    ListTableComponent,
    NoDataComponentComponent,
    RoadMapComponent,
  ],
  template: `
    <section>
      <section *ngIf="roadWorks.length == 0">
        <app-no-data-component></app-no-data-component>
      </section>
      <section *ngIf="roadWorks.length > 0">
        <section class="buttonSection">
          <button mat-raised-button color="primary" (click)="openDialog()">
            See on Map
          </button>
        </section>

        <app-list-table
          [tableData]="roadWorks"
          (detailsClicked)="handleDetailsClick($event)"
        ></app-list-table>
      </section>
    </section>
  `,
  styleUrl: './road-works-list.component.css',
})
export class RoadWorksListComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  roadService: RoadsService = inject(RoadsService);
  roadWorks: RoadWorks[] = [];
  dialog: MatDialog = inject(MatDialog);

  constructor(private router: Router) {
    const roadId = this.route.snapshot.params['id'];
    if (roadId) {
      this.roadService
        .getRoadServices(roadId)
        .then((response) => (this.roadWorks = response));
    }
  }

  handleDetailsClick(itemId: string): void {
    this.roadService.getRoadWorkDetails(itemId).then((response) => {
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
    const coords: Coordinate[] = this.roadWorks.map((work) => {
      return work.coordinate;
    });
    this.dialog.open(RoadMapComponent, {
      width: '1000px',
      data: coords,
    });
  }
}
