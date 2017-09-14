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
    private cls = {};
    public attributes = [];
    private nativeElement: any;
  constructor(public renderer: Renderer2, public hostElement: ElementRef) {
    this.nativeElement = hostElement.nativeElement;
  }
  public ngOnInit() {
    this.cls = {
        rounded: `btn-rounded`,
        block: `btn-block`,
        size: `btn-${this.size}`,
        outline: `btn-outline-${this.color}`,
        color: `btn-${this.color}`
    }
    this.attributes = Object.keys(this.cls);
    this.renderer.addClass(this.nativeElement, `btn`);
    /* this.attributes.forEach(attr => {
        if (this[attr] !== undefined) {
            if (typeof(this[attr] === 'boolean')) {
                if (this.checkInput(this[attr])) {
                    attr === 'loading' ?
                    this.appendLoading() :
                    this.addClass(this.cls[attr]);
                }
            }else {
                this.addClass(this.cls['color']);
            }
        }
    }); */
    if (this.checkInput(this.loading)) {
        this.appendLoading();
    }
    if (this.checkInput(this.rounded)) {
        this.addClass(this.cls['rounded']);
    }
    if (this.checkInput(this.block)) {
        this.addClass(this.cls['block']);
    }
    if (this.checkInput(this.size)) {
        this.addClass(this.cls['size']);
    }
    if (this.checkInput(this.outline)) {
        this.addClass(this.cls['outline']);
    } else {
        this.addClass(this.cls['color']);
    }
  }
  public ngOnChanges(changes) {
      console.log(changes);
      for (const key in changes) {
          if (changes.hasOwnProperty(key) && !changes[key].firstChange) {
              this[key] = changes[key].currentValue;
              if (key === 'loading') {
                changes['loading'].currentValue ?
                this.appendLoading() : this.removeLoading();
              } else {
                if (key === 'color') {
                    this.addClass(`btn-${changes[key].currentValue}`, `btn-${changes[key].previousValue}`)
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
  private checkInput(input) {
      return (input === true || input === '');
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
