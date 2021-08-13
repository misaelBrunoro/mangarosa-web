import { Component, OnInit } from '@angular/core';
import { KnowledgeArray } from 'src/app/models/collaborator.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-collaborator-register',
  templateUrl: './collaborator-register.component.html',
  styleUrls: ['./collaborator-register.component.scss']
})
export class CollaboratorRegisterComponent implements OnInit {
  public knowledgesArray = KnowledgeArray;
  public knowledges = new FormControl();
  constructor() { }

  ngOnInit(): void {
  }

}
