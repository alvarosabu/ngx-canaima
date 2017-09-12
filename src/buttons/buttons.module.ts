import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsButtonDirective } from './button.directive';


@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        AsButtonDirective
    ],
    declarations: [
        AsButtonDirective
    ],
    providers: [

    ],
})
export class ButtonsModule { }