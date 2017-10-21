import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleComponent } from './toggle.component';
@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        ToggleComponent
    ],
    declarations: [
        ToggleComponent,
    ],
    providers: [],
})
export class ToggleModule { }
