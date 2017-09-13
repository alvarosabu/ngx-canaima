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
    selector: 'as-header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {
    @Input('bg') public bg: string;
    @Input('title') public title: string;
    @Input('subtitle') public subtitle: string;
    @Input('msg') public msg: string;
    @Input('height') public height: string;
    @Input('customClass') public customClass: string;
    @Input('contentAlign') public contentAlign = 'center';
    @Input('parallax') public parallax: boolean;
    constructor(
        private location: Location
    ) {

    }
    public ngOnInit() {
    }
}
