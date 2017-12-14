import { NgModule } from '@angular/core';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';
import { ROUTES } from './no-content.routes';
import { NoContentComponent } from './no-content.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
    ],
    exports: [],
    declarations: [
        NoContentComponent
    ],
    providers: [],
})
export class NoContentModule { }
