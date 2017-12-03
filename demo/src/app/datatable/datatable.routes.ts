import { Routes } from '@angular/router';
import { DataResolver } from '../app.resolver';
import { DatatableActivityComponent } from './datatable.component';

export const ROUTES: Routes = [
    {
         path: 'datatable',
         component: DatatableActivityComponent,
         data: { title: 'Datatable' },
         pathMatch: 'full'
    }
];
