import { Routes } from '@angular/router';
// import { AuthGuard } from '../shared/auth/auth.guard';
import { DataResolver } from '../app.resolver';
import { <%= capitalname %>Component } from './<%= name %>.component';

export const ROUTES: Routes = [
    {
         path: '<%= name %>',
         component: <%= capitalname %>Component,
         // canActivate: [AuthGuard]
    }
];
