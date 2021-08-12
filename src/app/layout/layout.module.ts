import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutRoutes } from './layout.routing';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../material/material.module';
import { CollaboratorRegisterComponent } from '../pages/collaborator-register/collaborator-register.component';
import { CollaboratorListComponent } from '../pages/collaborator-list/collaborator-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    MaterialModule
  ],
  declarations: [
    CollaboratorRegisterComponent,
    CollaboratorListComponent
  ],
})

export class LayoutModule {}
