import { Routes } from '@angular/router';
import { DataResolver } from '../app.resolver';
import { CardsComponent } from './cards.component';

export const ROUTES: Routes = [
    {
         path: 'cards',
         component: CardsComponent
    }
];