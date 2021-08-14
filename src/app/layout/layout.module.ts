import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutRoutes } from './layout.routing';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../material/material.module';
import { CollaboratorRegisterComponent } from '../pages/collaborator-register/collaborator-register.component';
import { CollaboratorListComponent } from '../pages/collaborator-list/collaborator-list.component';
import { CollaboratorService } from '../services/collaborator.service';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { CpfPipe } from '../pages/pipes/cpf.pipe';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    MaterialModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  declarations: [
    CollaboratorRegisterComponent,
    CollaboratorListComponent,
  ],
  providers: [
    CollaboratorService,
    CpfPipe
  ]
})

export class LayoutModule {}
