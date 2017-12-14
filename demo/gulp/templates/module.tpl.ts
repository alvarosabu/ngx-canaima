import { NgModule } from '@angular/core';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';
import { ROUTES } from './<%= name %>.routes';
import { <%= capitalname %>Component } from './<%= name %>.component';

import { SharedModule } from './shared/shared.module';
@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
    ],
    exports: [],
    declarations: [
        <%= capitalname %>Component
    ],
    providers: [],
})
export class <%= capitalname %>Module { }
