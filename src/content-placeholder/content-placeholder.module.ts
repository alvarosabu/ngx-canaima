import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentPlaceholderDirective } from './content-placeholder.directive';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        ContentPlaceholderDirective
    ],
    declarations: [
        ContentPlaceholderDirective
    ],
    providers: [

    ],
})
export class ContentPlaceholderModule { }