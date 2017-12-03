import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileButtonComponent } from './file-button.component';
import { FileUploadModule } from 'ng2-file-upload';
import { ButtonsModule } from '../buttons/buttons.module';



@NgModule({
    imports: [
        CommonModule,
        FileUploadModule,
        ButtonsModule
    ],
    exports: [
        FileButtonComponent
    ],
    declarations: [
        FileButtonComponent
    ],
    providers: [
    ],
})
export class FileButtonModule { }
