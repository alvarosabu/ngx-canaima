import { Directive, ElementRef, Renderer2, Input, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[asButton]',
})
export class AsButtonDirective implements OnInit {
    @Input() color = 'default';
    @Input() outline;
    @Input() rounded;
    @Input('asButton') asButton ;

  constructor(public renderer: Renderer2, public hostElement: ElementRef) {
  }
  public ngOnInit() {
    this.renderer.addClass(this.hostElement.nativeElement, `btn`);
    if (this.outline !== undefined) {
        this.renderer.addClass(this.hostElement.nativeElement, `btn-outline-${this.color}`);
    }else {
        this.renderer.addClass(this.hostElement.nativeElement, `btn-${this.color}`);
    }
    if (this.rounded !== undefined) {
        this.renderer.addClass(this.hostElement.nativeElement, `btn-rounded`);
    }else {
        this.renderer.addClass(this.hostElement.nativeElement, `btn-${this.color}`);
    }
  }
  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.renderer);
  }
}
