import { ButtonsModule } from './../buttons/buttons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge.component';
@NgModule({
    imports: [
        CommonModule,
        ButtonsModule
    ],
    exports: [
        BadgeComponent
    ],
    declarations: [
        BadgeComponent,
    ],
    providers: [],
})
export class BadgesModule { }
