import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsButtonDirective } from './button.directive';
import { AsIconButtonDirective } from './button-icon.directive';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        AsButtonDirective,
        AsIconButtonDirective
    ],
    declarations: [
        AsButtonDirective,
        AsIconButtonDirective
    ],
    providers: [

    ],
})
export class ButtonsModule { }
