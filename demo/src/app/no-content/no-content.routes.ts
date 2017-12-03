
import { Routes } from '@angular/router';
import { DataResolver } from '../app.resolver';
import { NoContentComponent } from './no-content.component';

export const ROUTES: Routes = [
  { path: '**',    component: NoContentComponent },
];
