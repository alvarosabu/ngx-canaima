import {
    Directive,
    ElementRef,
    Renderer2,
    Input,
    OnInit,
    OnChanges
} from '@angular/core';

@Directive({
  selector: '[asButton]',
})
export class AsButtonDirective implements OnInit, OnChanges {
    @Input() color = 'link';
    @Input() size;
    @Input() outline;
    @Input() rounded;
    @Input() block;
    // tslint:disable-next-line:no-inferrable-types
    @Input() loading: any = false;
    @Input('asButton') asButton ;
    private nativeElement: any;
  constructor(public renderer: Renderer2, public hostElement: ElementRef) {
    this.nativeElement = hostElement.nativeElement;
  }
  public ngOnInit() {
    this.renderer.addClass(this.nativeElement, `btn`);
    if (this.loading === true || this.loading === '') {
        this.appendLoading();
    }
    if (this.rounded === true || this.rounded === '') {
        this.addClass(`btn-rounded`);
    }
    if (this.block === true || this.block === '') {
        this.addClass(`btn-block`);
    }
    if (this.size === true || this.size === '') {
        this.addClass(`btn-${this.size}`);
    }
    if (this.outline === true || this.outline === '') {
        this.addClass(`btn-outline-${this.color}`);
    } else {
        this.addClass(`btn-${this.color}`);
    }
  }
  public ngOnChanges(changes) {
    if (changes['color'] && !changes['color'].firstChange) {
        this.color = changes['color'].currentValue;
        this.addClass(`btn-${this.color}`);
    }
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
  private addClass(cl: string) {
    if (this.nativeElement.classList.contains(cl)) {
        this.renderer.removeClass(this.nativeElement, cl);
    }else {
        this.renderer.addClass(this.nativeElement, cl);
  }
}
