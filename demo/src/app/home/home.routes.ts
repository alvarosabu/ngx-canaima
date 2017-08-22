import { Routes } from '@angular/router';
import { DataResolver } from '../app.resolver';
import { HomeComponent } from './home.component';

export const ROUTES: Routes = [
    {
         path: 'home',
         component: HomeComponent,
    },
];
