import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleFabComponent } from './circle-fab.component';

import { SharedModule } from '../shared.module';
@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        CircleFabComponent
    ],
    declarations: [
        CircleFabComponent
    ],
    providers: [],
})
export class CircleFabModule { }
