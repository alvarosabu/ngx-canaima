import { Routes } from '@angular/router';
import { DataResolver } from '../app.resolver';
import { UploadersComponent } from './uploaders.component';

export const ROUTES: Routes = [
    {
         path: 'uploaders',
         component: UploadersComponent,
         data: { title: 'Uploaders' }
    }
];