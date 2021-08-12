import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './core/navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [NavbarComponent, TableComponent],
  exports: [NavbarComponent, TableComponent],
})
export class ComponentsModule {}
