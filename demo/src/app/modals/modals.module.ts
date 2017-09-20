
import { NgModule } from '@angular/core';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';
import { ROUTES } from './modals.routes';
import { ModalsComponent } from './modals.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
    ],
    exports: [],
    declarations: [
        ModalsComponent
    ],
    providers: [],
})
export class ModalsActivityModule { }
