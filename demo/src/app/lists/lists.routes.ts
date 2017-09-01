import { Routes } from '@angular/router';

import { DataResolver } from '../app.resolver';
import { ListsComponent } from './lists.component';

export const ROUTES: Routes = [
    {
         path: 'lists',
         component: ListsComponent,
    }
];
