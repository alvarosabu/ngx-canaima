import {
    Component,
    OnInit,
    Input,
    Output,
    ViewEncapsulation
} from '@angular/core';
import {Location} from '@angular/common';
@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'as-back-button',
    template: "<div  class=\"back-button\"  (click)=\"goBack()\"> <i *ngIf=\"icon\" class=\"back-button__icon {{prefix}} {{prefix}}-{{icon}}\"></i> <span *ngIf=\"icon\" class=\"back-button__text\"> {{label}} </span> </div>"
})

export class BackButtonComponent implements OnInit {
    @Input('prefix') public prefix = 'mdi';
    @Input('icon') public icon = 'chevron-left';
    @Input('label') public label: string;

    constructor(
        private location: Location
    ) {

    }
    public ngOnInit() {
    }
    public goBack() {
        this.location.back();
    }
}
