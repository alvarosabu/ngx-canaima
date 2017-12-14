import { NgModule } from '@angular/core';
import { ImagePreviewDirective } from './image-preview.directive';
import { BgImagePreviewDirective } from './bg-image-preview.directive';

@NgModule({
    imports: [],
    exports: [
        BgImagePreviewDirective,
        ImagePreviewDirective,
    ],
    declarations: [
        BgImagePreviewDirective,
        ImagePreviewDirective,
    ],
    providers: [],
})
export class PreviewModule { }
