import { Directive, ElementRef, Input, Renderer, OnChanges, SimpleChanges } from '@angular/core';

@Directive({ selector: 'img[imgPreview]' })

export class ImagePreviewDirective implements OnChanges {

    @Input() public image: any;

    constructor(private el: ElementRef, private renderer: Renderer) { }

    public ngOnChanges(changes: SimpleChanges) {

        const reader = new FileReader();
        const el = this.el;

        reader.onloadend = (e) => {
            el.nativeElement.src = reader.result;
        };

        if (this.image) {
            return reader.readAsDataURL(this.image);
        }

    }

}