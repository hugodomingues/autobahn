import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RoadsService } from '../../services/roads.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    RouterLink,
  ],
  template: `
  <section>
    <section class="homePage">
        <h3>
          Welcome to your application to check over all the Germany's federal highways! 
        </h3>
        <h4>
          Select one of the roads or search for the road you want to see
        </h4>
    </section>
    <section class="searchBar">
    <form>
        <input type="text" placeholder="Filter by city" #filter (input)="filterResults(filter.value)">
      </form>
    </section>
    <section class="results">
      <mat-grid-list cols="2" rowHeight="400px">
        <mat-grid-tile *ngFor="let road of roadsFilterList">
          <div class="roadDetails">
            <h1 class="roadName">{{ road }}</h1>
            <a [routerLink]="['/details', road]" class="detailsText"
              >See details</a
            >
          </div>
        </mat-grid-tile>
      </mat-grid-list>
    </section>
  </section>
    
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  roads: string[] = [];
  roadsFilterList: string[] = [];
  roadService: RoadsService = inject(RoadsService);
  constructor() {
    this.roadService.getAllRoads().then((result: string[]) => {
      this.roads = result;
      this.roadsFilterList = result;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.roadsFilterList = this.roads;
      return;
    }

    this.roadsFilterList = this.roads.filter(
      road => road.toLowerCase().includes(text.toLowerCase())
    );
  }

}
