
import { NgModule } from '@angular/core';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';
import { ROUTES } from './forms.routes';
import { FormsComponent } from './forms.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
    ],
    exports: [],
    declarations: [
        FormsComponent
    ],
    providers: [],
})
export class FormsActivityModule { }
