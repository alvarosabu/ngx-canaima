
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from './../buttons/buttons.module';
import { EmptyStateComponent } from './empty-state.component';

@NgModule({
    imports: [
        CommonModule,
        ButtonsModule
    ],
    exports: [
        EmptyStateComponent
    ],
    declarations: [
        EmptyStateComponent
    ],
    providers: [],
})
export class EmptyStateModule { }
