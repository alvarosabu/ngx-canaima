import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaUploaderComponent } from './media-uploader.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FileUploadModule } from 'ng2-file-upload';
import { MediaUploaderService } from './media-uploader.service';
import { PreviewModule } from './../preview/preview.module';


@NgModule({
    imports: [
        CommonModule,
        PreviewModule,
        FileUploadModule,
        PdfViewerModule
    ],
    exports: [
        MediaUploaderComponent
    ],
    declarations: [
        MediaUploaderComponent
    ],
    providers: [
        MediaUploaderService
    ],
})
export class MediaUploaderModule { }
