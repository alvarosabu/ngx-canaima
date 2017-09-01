
import { NgModule } from '@angular/core';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';
import { ROUTES } from './lists.routes';
import { ListsComponent } from './lists.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
    ],
    exports: [],
    declarations: [
        ListsComponent
    ],
    providers: [],
})
export class ListsActivityModule { }
