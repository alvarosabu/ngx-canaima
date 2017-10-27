import {
    Directive,
    ElementRef,
    Renderer2,
    Input,
    OnInit,
    OnChanges
} from '@angular/core';

@Directive({
    selector: '[asIconButton]',
})
export class AsIconButtonDirective implements OnInit, OnChanges {
    @Input() color = 'plain';
    @Input() size;
    @Input() outline;
    @Input() rounded;
    @Input() circle;
    @Input() block;
    @Input() prefix = 'mdi';
    @Input() icon;
    @Input() side = 'left';
    @Input('asIconButton') asIconButton;
    private nativeElement: any;
    constructor(public renderer: Renderer2, public hostElement: ElementRef) {
        this.nativeElement = hostElement.nativeElement;
    }
    public ngOnInit() {
        this.renderer.addClass(this.nativeElement, `btn`);
        if (this.icon !== undefined && this.nativeElement) {
            this.appendIcon();
        }
        if (this.checkInput(this.rounded)) {
            this.renderer.addClass(this.nativeElement, `btn-rounded`);
        }
        if (this.checkInput(this.circle)) {
            this.renderer.addClass(this.nativeElement, `btn-circle`);
        }
        if (this.checkInput(this.block)) {
            this.renderer.addClass(this.nativeElement, `btn-block`);
        }
        if (this.checkInput(this.size)) {
            this.renderer.addClass(this.nativeElement, `btn-${this.size}`);
        }
        if (this.checkInput(this.outline)) {
            this.renderer.addClass(this.nativeElement, `btn-outline-${this.color}`);
        } else {
            this.renderer.addClass(this.nativeElement, `btn-${this.color}`);
        }
    }
    public ngOnChanges(changes) {
        for (const key in changes) {
            if (changes.hasOwnProperty(key) && !changes[key].firstChange) {
                this[key] = changes[key].currentValue;
                if (key === 'asIconButton') {
                    changes['asIconButton'].currentValue ?
                    this.appendIcon() : this.removeIcon();
                  } else {
                    if (key === 'color') {
                        this.addClass(`btn-${changes[key].currentValue}`, `btn-${changes[key].previousValue}`)
                    }else if (key === 'icon') {
                        this.removeIcon();
                        this.appendIcon();
                    }else if (key === 'outline') {
                        let isOutline = changes[key].currentValue;
                        this.addClass(
                            `btn-${isOutline ? 'outline-' : ''}${this.color}`,
                            `btn-${!isOutline ? 'outline-' : ''}${this.color}`)
                    }else {
                        this.addClass(`btn-${key}`);
                    }
                }
            }
        }
    }
    private addClass(current: string, prev = null ) {
        if (prev) {
            this.renderer.removeClass(this.nativeElement, prev);
        }
        if (this.nativeElement.classList.contains(current)) {
            this.renderer.removeClass(this.nativeElement, current);
        }else {
            this.renderer.addClass(this.nativeElement, current);
        }
    }
    private checkInput(input) {
        return (input === true || input === '');
    }
    private appendIcon() {
        let child = this.renderer.createElement(`i`);
        if (this.nativeElement.innerText.length > 0) {
            this.renderer.addClass(this.nativeElement, `btn-icon-${this.side}`);
        }
        this.renderer.addClass(child, `${this.prefix}`);
        this.renderer.addClass(child, `${this.prefix}-${this.icon}`);
        this.renderer.appendChild(this.nativeElement, child);
    }
    private removeIcon() {
        let child = this.nativeElement.childNodes[1];
        this.renderer.removeChild(this.nativeElement, child);
    }
}
