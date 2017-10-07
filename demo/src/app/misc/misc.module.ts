import { NgModule } from '@angular/core';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';
import { ROUTES } from './misc.routes';
import { MiscComponent } from './misc.component';

import { SharedModule } from '../shared/shared.module';
@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
    ],
    exports: [],
    declarations: [
        MiscComponent
    ],
    providers: [],
})
export class MiscActivityModule { }
