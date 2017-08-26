import { Routes } from '@angular/router';
import { DataResolver } from '../app.resolver';
import { FormsComponent } from './forms.component';

export const ROUTES: Routes = [
    {
         path: 'forms',
         component: FormsComponent,
    }
];