import { NgModule } from '@angular/core';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';
import { ROUTES } from './home.routes';
import { HomeComponent } from './home.component';

import { SharedModule } from '../shared/shared.module';
import { BsDropdownModule } from 'ngx-bootstrap';

import { NotesService } from './../core/note/notes.service';
@NgModule({
    imports: [
        SharedModule,
        BsDropdownModule,
        RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
    ],
    exports: [],
    declarations: [
        HomeComponent
    ],
    providers: [
        NotesService
    ],
})
export class HomeModule { }
