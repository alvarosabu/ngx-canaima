import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[color]',
})
export class AsButtonSimpleDirective {
  @Input() color: string;
  constructor(renderer: Renderer2, hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, `btn-${this.color}`);
  }
}
