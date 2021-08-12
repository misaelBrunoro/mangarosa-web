import { Routes } from '@angular/router';
import { CollaboratorComponent } from '../pages/collaborator/collaborator.component';

export const LayoutRoutes: Routes = [
    {
        path: '',
        redirectTo: 'registros',
        pathMatch: 'full'
    },
    {
        path: 'registros',
        component: CollaboratorComponent
    },
];
