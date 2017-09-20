import { Routes } from '@angular/router';
import { DataResolver } from '../app.resolver';
import { ModalsComponent } from './modals.component';

export const ROUTES: Routes = [
    {
         path: 'modals',
         component: ModalsComponent,
         data: { title: 'Modals' }
    }
];
