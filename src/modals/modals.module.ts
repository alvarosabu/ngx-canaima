
import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ModalComponent } from './modal.component';
import { ButtonsModule } from '../buttons/buttons.module';
import {
  ModalModule
} from 'ngx-bootstrap';
@NgModule({
    imports: [
        CommonModule,
        ModalModule,
        ButtonsModule
    ],
    exports: [
        ModalComponent
    ],
    declarations: [
        ModalComponent
    ],
    providers: [],
})
export class AsModalModule { }
