import { Directive, ElementRef, Input, Renderer, OnChanges, SimpleChanges } from '@angular/core';

@Directive({ selector: 'pdf-viewer[pdfPreview]' })

export class PdfPreviewDirective implements OnChanges {

    @Input() public pdf: any;

    constructor(private el: ElementRef, private renderer: Renderer) { }

    public ngOnChanges(changes: SimpleChanges) {

        const reader = new FileReader();
        const el = this.el;

        reader.onloadend = (e) => {
            /* el.nativeElement.src = new Uint8Array(reader.result); */
            el.nativeElement.src = reader.result;
        };

        if (this.pdf) {
            /* console.log('PDF', reader.readAsArrayBuffer(this.pdf)); */
            let fileURL = URL.createObjectURL(this.pdf);
            return fileURL;
            /* return reader.readAsArrayBuffer(this.pdf); */
        }

    }
}
