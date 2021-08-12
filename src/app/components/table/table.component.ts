import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit  {
  @Input() displayedColumns: string[] = [];
  @Input() ELEMENT_DATA: any[] = [];

  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
