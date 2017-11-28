import { Directive, ElementRef, Input, Renderer, OnChanges, SimpleChanges } from '@angular/core';

@Directive({ selector: 'pdf-viewer[pdfPreview]' })

export class PdfPreviewDirective implements OnChanges {

    @Input() public pdf: any;

    constructor(private el: ElementRef, private renderer: Renderer) { }

    public ngOnChanges(changes: SimpleChanges) {

        const reader = new FileReader();
        const el = this.el;

        reader.onloadend = (e) => {
            el.nativeElement.src = new Uint8Array(reader.result);
        };

        if (this.pdf) {
            /* console.log('PDF', reader.readAsArrayBuffer(this.pdf)); */
            return reader.readAsArrayBuffer(this.pdf);
        }

    }
    private base64ToUint8Array(base64) {
        let raw = atob(base64);
        let uint8Array = new Uint8Array(raw.length);
        for (let i = 0; i < raw.length; i++) {
          uint8Array[i] = raw.charCodeAt(i);
        }
        return uint8Array;
    }
}