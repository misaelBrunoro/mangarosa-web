import { Routes } from '@angular/router';
import { CollaboratorListComponent } from '../pages/collaborator-list/collaborator-list.component';
import { CollaboratorRegisterComponent } from '../pages/collaborator-register/collaborator-register.component';

export const LayoutRoutes: Routes = [
    {
        path: '',
        redirectTo: 'registros',
        pathMatch: 'full'
    },
    {
        path: 'registros',
        component: CollaboratorListComponent
    },
    {
        path: ':nome/registrar',
        component: CollaboratorRegisterComponent
    },
];
