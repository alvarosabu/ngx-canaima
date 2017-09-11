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
    templateUrl: 'back-button.component.html'
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
