import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-no-data-component',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="no-data-container">
      <mat-icon class="icon">sentiment_very_dissatisfied</mat-icon>
      <p class="message">No data available</p>
    </div>
  `,
  styleUrl: './no-data-component.component.css',
})
export class NoDataComponentComponent {}
