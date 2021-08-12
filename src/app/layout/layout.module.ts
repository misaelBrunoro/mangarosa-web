import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollaboratorComponent } from '../pages/collaborator/collaborator.component';
import { LayoutRoutes } from './layout.routing';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../material/material.module';

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
    CollaboratorComponent
  ],
})

export class LayoutModule {}
