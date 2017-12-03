import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataResolver } from './app.resolver';
import { AuthGuard } from './core/auth/auth.guard';
export const ROUTES: Routes = [
    {
         path: '',
         component: HomeComponent,
         pathMatch: 'full'
         /* canActivate: [AuthGuard] */
    }
];
