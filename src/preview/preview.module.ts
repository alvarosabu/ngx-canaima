import { PdfPreviewDirective } from './pdf-preview.directive';
import { NgModule } from '@angular/core';
import { ImagePreviewDirective } from './image-preview.directive';
import { BgImagePreviewDirective } from './bg-image-preview.directive';

@NgModule({
    imports: [],
    exports: [
        BgImagePreviewDirective,
        ImagePreviewDirective,
        PdfPreviewDirective
    ],
    declarations: [
        BgImagePreviewDirective,
        ImagePreviewDirective,
        PdfPreviewDirective
    ],
    providers: [],
})
export class PreviewModule { }
