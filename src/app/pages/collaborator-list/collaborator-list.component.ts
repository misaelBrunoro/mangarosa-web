import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ICollaborator } from 'src/app/models/collaborator.model';
import { CollaboratorService } from 'src/app/services/collaborator.service';

@Component({
  selector: 'app-collaborator-list',
  templateUrl: './collaborator-list.component.html',
  styleUrls: ['./collaborator-list.component.scss'],
})
export class CollaboratorListComponent implements OnInit {
  public displayedColumns: string[] = [
    'ID',
    'Nome',
    'Email',
    'CPF',
    'Telefone',
    'Validacao',
    'DataValidacao',
  ];
  public dataSource = new MatTableDataSource<ICollaborator>([]);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private collaboratorService: CollaboratorService) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;

    this.collaboratorService.index().subscribe((data: ICollaborator[]) => {
      this.dataSource.data = data;
    });
  }
}
