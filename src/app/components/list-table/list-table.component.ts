import {
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
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface PeriodicElement {
  title: string;
  subtitle: string;
  details: string;
}

@Component({
  selector: 'app-list-table',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatButtonModule, MatIconModule],
  template: `
    <div class="mat-elevation-z8">
      <table mat-table [dataSource]="dataSource">
        <ng-container matColumnDef="title">
          <th mat-header-cell *matHeaderCellDef>Title</th>
          <td mat-cell *matCellDef="let element">{{ element.title }}</td>
        </ng-container>
        <ng-container matColumnDef="subtitle">
          <th mat-header-cell *matHeaderCellDef>SubTitle</th>
          <td mat-cell *matCellDef="let element">{{ element.subtitle }}</td>
        </ng-container>
        <ng-container matColumnDef="details">
          <th mat-header-cell *matHeaderCellDef>Details</th>
          <td
            mat-cell
            *matCellDef="let element"
            (click)="showDetails(element.details)"
          >
            <button mat-icon-button color="primary">
              <mat-icon>visibility</mat-icon>
            </button>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
      </table>

      <mat-paginator
        #paginator
        [pageSizeOptions]="[5, 10, 20]"
        showFirstLastButtons
        aria-label="Select page of data"
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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.tableData = changes['tableData'].currentValue;
    const newArray: PeriodicElement[] = this.tableData.map((data) => {
      return {
        title: data.title,
        subtitle: data.subtitle,
        details: data.identifier,
      };
    });
    this.dataSource.data = newArray;
  }

  showDetails(itemId: string): void {
    this.detailsClicked.emit(itemId);
  }
}
