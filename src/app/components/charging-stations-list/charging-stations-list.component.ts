import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

import { ActivatedRoute, Router } from '@angular/router';
import { RoadsService } from '../../services/roads.service';
import { ElectricStations } from '../../interfaces/electric-stations';
import { MatButtonModule } from '@angular/material/button';
import { ListTableComponent } from '../list-table/list-table.component';
import { NoDataComponentComponent } from '../no-data-component/no-data-component.component';
import { DetailsInfo } from '../../interfaces/common';

@Component({
  selector: 'app-charging-stations-list',
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
      <section *ngIf="chargingStations.length == 0">
        <app-no-data-component></app-no-data-component>
      </section>
      <section *ngIf="chargingStations.length > 0">
        <section class="buttonSection">
          <button mat-raised-button color="primary">See on Map</button>
        </section>
        <app-list-table
          [tableData]="chargingStations"
          (detailsClicked)="handleDetailsClick($event)"
        ></app-list-table>
      </section>
    </section>
  `,
  styleUrl: './charging-stations-list.component.css',
})
export class ChargingStationsListComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  roadService: RoadsService = inject(RoadsService);

  chargingStations: ElectricStations[] = [];

  constructor(private router: Router) {
    const roadId = this.route.snapshot.params['id'];
    if (roadId) {
      this.roadService
        .getElectricStations(roadId)
        .then((resp) => (this.chargingStations = resp));
    }
  }

  handleDetailsClick(itemId: string): void {
    this.roadService.getChargingStationDetails(itemId).then((response) => {
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
}
