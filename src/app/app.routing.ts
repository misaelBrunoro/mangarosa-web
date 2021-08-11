import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollaboratorComponent } from './pages/collaborator/collaborator.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'registros'
  },
  {
    path: 'registros',
    component: CollaboratorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
