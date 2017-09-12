import {
    Directive,
    ElementRef,
    Renderer2,
    Input,
    HostListener,
    OnInit,
    OnChanges
} from '@angular/core';

@Directive({
  selector: '[asButton]',
})
export class AsButtonDirective implements OnInit, OnChanges {
    @Input() color = 'default';
    @Input() size;
    @Input() outline;
    @Input() rounded;
    @Input() block;
    // tslint:disable-next-line:no-inferrable-types
    @Input() loading: any = false;
    @Input('asButton') asButton ;
    private nativeElement: Node;
  constructor(public renderer: Renderer2, public hostElement: ElementRef) {
    this.nativeElement = hostElement.nativeElement;
  }
  public ngOnInit() {
    this.renderer.addClass(this.nativeElement, `btn`);
    if (this.loading === true || this.loading === '') {
        this.appendLoading();
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
  public ngOnChanges(changes) {
    if (changes['loading'] && !changes['loading'].firstChange) {
        if (changes['loading'] && changes['loading'].currentValue) {
            this.appendLoading();
        }else {
            this.removeLoading();
        }
    }

  }
  private appendLoading() {
    let child = this.renderer.createElement(`i`);
    this.renderer.appendChild(this.nativeElement, child);
    this.renderer.addClass(this.nativeElement, `btn-loading`);
  }
  private removeLoading() {
    let child = this.nativeElement.childNodes[1];
    this.renderer.removeChild(this.nativeElement, child);
    this.renderer.removeClass(this.nativeElement, `btn-loading`);
  }
}
