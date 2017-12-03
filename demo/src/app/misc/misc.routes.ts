import { Routes } from '@angular/router';
import { DataResolver } from '../app.resolver';
import { MiscComponent } from './misc.component';

export const ROUTES: Routes = [
    {
         path: 'misc',
         component: MiscComponent,
         data: { title: 'Misc' },
         pathMatch: 'full'
    }
];
