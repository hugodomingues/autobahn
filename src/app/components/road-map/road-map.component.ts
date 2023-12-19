import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import * as L from 'leaflet';
import { Coordinate } from '../../interfaces/common';

@Component({
  selector: 'app-road-map',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  template: `
    <div>
      <div id="map"></div>
    </div>
  `,
  styleUrl: './road-map.component.css',
})
export class RoadMapComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Coordinate[]) {}

  ngAfterViewInit(): void {
    this.initializeMap();
  }

  private initializeMap(): void {
    const map = L.map('map').setView([0, 0], 2); // Default view if no coordinates

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    this.data.forEach((coordinate: Coordinate) => {
      L.marker([coordinate.lat, coordinate.long]).addTo(map);
    });

    if (this.data.length > 0) {
      map.setView([this.data[0].lat, this.data[0].long], 13); // Set view to the first coordinate
    }

    // L.marker([latitude, longitude]).addTo(map);
  }
}
