import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

export interface PeriodicElement {
  title: string;
  subtitle: number;
}

@Component({
  selector: 'app-list-table',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  template: `
    <div class="mat-elevation-z8">
      <table mat-table [dataSource]="dataSource">
        <!-- Title Column -->
        <ng-container matColumnDef="title">
          <th mat-header-cell *matHeaderCellDef>No.</th>
          <td mat-cell *matCellDef="let element">{{ element.title }}</td>
        </ng-container>

        <!-- SubTitle Column -->
        <ng-container matColumnDef="subtitle">
          <th mat-header-cell *matHeaderCellDef>Name</th>
          <td mat-cell *matCellDef="let element">{{ element.subtitle }}</td>
        </ng-container>

        <!-- Show Details Column -->
        <ng-container matColumnDef="details">
          <th mat-header-cell *matHeaderCellDef>Details</th>
          <td
            mat-cell
            *matCellDef="let element"
            (click)="showDetails(element.identifier)"
          >
            {{ element.identifier }}
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
      </table>

      <mat-paginator
        [pageSizeOptions]="[5, 10, 20]"
        showFirstLastButtons
        aria-label="Select page of periodic elements"
      >
      </mat-paginator>
    </div>
  `,
  styleUrl: './list-table.component.css',
})
export class ListTableComponent implements OnChanges {
  @Input() tableData: any[] = [];
  @Output() detailsClicked = new EventEmitter<string>();

  displayedColumns: string[] = ['title', 'subtitle', 'details'];
  dataSource = new MatTableDataSource<PeriodicElement>();

  //@ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnChanges(changes: SimpleChanges): void {
    this.tableData = changes['tableData'].currentValue;
    this.dataSource = new MatTableDataSource(this.tableData);
    this.dataSource.paginator = this.paginator;
  }

  showDetails(itemId: string): void {
    this.detailsClicked.emit(itemId);
  }
}
