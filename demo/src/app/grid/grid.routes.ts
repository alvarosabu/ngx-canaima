import { Routes } from '@angular/router';
import { DataResolver } from '../app.resolver';
import { GridComponent } from './grid.component';

export const ROUTES: Routes = [
    {
         path: 'grid',
         component: GridComponent,
         data: { title: 'Grid List' }
    }
];
