import { Routes } from '@angular/router';
import { DataResolver } from '../app.resolver';
import { LayoutComponent } from './layout.component';

export const ROUTES: Routes = [
    {
         path: 'layout',
         component: LayoutComponent,
         data: { title: 'Layout' },
         pathMatch: 'full'
    }
];
