import { NgModule } from '@angular/core';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';
import { ROUTES } from './datatable.routes';
import { DatatableActivityComponent } from './datatable.component';

import { SharedModule } from '../shared/shared.module';
@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
    ],
    exports: [],
    declarations: [
        DatatableActivityComponent
    ],
    providers: [],
})
export class DatatableActivityModule { }
