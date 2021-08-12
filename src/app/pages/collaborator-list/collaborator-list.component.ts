import { Component, OnInit } from '@angular/core';
import { Collaborator } from 'src/app/models/collaborator.model';

@Component({
  selector: 'app-collaborator-list',
  templateUrl: './collaborator-list.component.html',
  styleUrls: ['./collaborator-list.component.scss']
})
export class CollaboratorListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
