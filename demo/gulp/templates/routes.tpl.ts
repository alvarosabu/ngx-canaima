import { Routes } from '@angular/router';
import { DataResolver } from '../app.resolver';
import { <%= capitalname %>Component } from './<%= name %>.component';

export const ROUTES: Routes = [
    {
         path: '<%= name %>',
         component: <%= capitalname %>Component,
         data: { title: '<%= capitalname %>' },
         pathMatch: 'full'
    }
];
