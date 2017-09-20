import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabComponent } from './fab/fab.component';
import { CircleFabComponent } from './circle-fab/circle-fab.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        FabComponent
    ],
    declarations: [
        FabComponent
    ],
    providers: [],
})
export class FabsModule { }
