import {
    Directive,
    ElementRef,
    Renderer2,
    Input,
    HostListener,
    OnInit
} from '@angular/core';

@Directive({
    selector: '[asIconButton]',
})
export class AsIconButtonDirective implements OnInit {
    @Input() color = 'default';
    @Input() size;
    @Input() outline;
    @Input() rounded;
    @Input() block;
    @Input() prefix = 'mdi';
    @Input() icon;
    @Input() side = 'left';
    @Input('asIconButton') asIconButton;
    private nativeElement: Node;
    constructor(public renderer: Renderer2, public hostElement: ElementRef) {
        this.nativeElement = hostElement.nativeElement;
    }
    public ngOnInit() {
        this.renderer.addClass(this.nativeElement, `btn`);
        if (this.icon !== undefined && this.nativeElement) {
            let child = this.renderer.createElement(`i`);
            this.renderer.addClass(this.nativeElement, `btn-icon-${this.side}`);
            this.renderer.addClass(child, `${this.prefix}`);
            this.renderer.addClass(child, `${this.prefix}-${this.icon}`);
            this.renderer.appendChild(this.nativeElement, child);
        }
        if (this.rounded !== undefined) {
            this.renderer.addClass(this.nativeElement, `btn-rounded`);
        }
        if (this.block !== undefined) {
            this.renderer.addClass(this.nativeElement, `btn-block`);
        }
        if (this.size !== undefined) {
            this.renderer.addClass(this.nativeElement, `btn-${this.size}`);
        }
        if (this.outline !== undefined) {
            this.renderer.addClass(this.nativeElement, `btn-outline-${this.color}`);
        } else {
            this.renderer.addClass(this.nativeElement, `btn-${this.color}`);
        }
    }
}
