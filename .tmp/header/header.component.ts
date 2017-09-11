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
    template: "<header  class=\"header {{customClass}}\" [ngClass]=\"{'header--parallax': parallax}\" [ngStyle]=\"{'background-image': bg && 'url(' + bg + ')', 'justify-content': contentAlign }\"> <div  class=\"header__body\"> <h4  class=\"header__title\" *ngIf=\"title && headerContent.children.length == 0\">{{title}}</h4> <h6  class=\"header__subtitle\"  *ngIf=\"subtitle && headerContent.children.length == 0\">{{subtitle}}</h6> <p class=\"header__msg\"  *ngIf=\"headerContent.children.length == 0\"> {{msg}} </p> <div #headerContent> <ng-content selector=\".header__content\" ></ng-content> </div> </div> </header>"
})

export class HeaderComponent implements OnInit {
    @Input('bg') public bg: string;
    @Input('title') public title: string;
    @Input('subtitle') public subtitle: string;
    @Input('msg') public msg: string;
    @Input('height') public height: string;
    @Input('contentAlign') public contentAlign = 'center';
    @Input('parallax') public parallax: boolean;
    constructor(
        private location: Location
    ) {

    }
    public ngOnInit() {
    }
}
