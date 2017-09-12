import { Directive, ElementRef, Renderer2, Input, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[asButton]',
})
export class AsButtonDirective implements OnInit {
    @Input() color = 'default';
    @Input() size;
    @Input() outline;
    @Input() rounded;
    @Input() block;
    @Input('asButton') asButton ;

  constructor(public renderer: Renderer2, public hostElement: ElementRef) {
  }
  public ngOnInit() {
    this.renderer.addClass(this.hostElement.nativeElement, `btn`);
    if (this.rounded !== undefined) {
        this.renderer.addClass(this.hostElement.nativeElement, `btn-rounded`);
    }
    if (this.block !== undefined) {
        this.renderer.addClass(this.hostElement.nativeElement, `btn-block`);
    }
    if (this.size !== undefined) {
        this.renderer.addClass(this.hostElement.nativeElement, `btn-${this.size}`);
    }
    if (this.outline !== undefined) {
        this.renderer.addClass(this.hostElement.nativeElement, `btn-outline-${this.color}`);
    } else {
        this.renderer.addClass(this.hostElement.nativeElement, `btn-${this.color}`);
    }
  }
}
