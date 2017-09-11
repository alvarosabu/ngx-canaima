
import {
    Component,
    OnInit,
    Input,
    Output,
    ViewEncapsulation
} from '@angular/core';
import { Nav } from './nav';
@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'as-navmenu',
    template: "<!-- <div class=\"navmenu__navlist hidden-sm hidden-md hidden-lg\" *ngIf=\"navlist && collapsable\" > <div class=\"navmenu__navitem\" *ngFor=\"let nav of navlist\"> <a routerLink=\"/{{nav.slugName}}\" (click)=\"_toggleOpened()\" routerLinkActive=\"active\" title=\"{{nav.title}}\">{{nav.title}}</a> </div> </div> --> <div [hidden]=\"!open\" class=\"navmenu {{customClass}} shadow-{{shadow}}\" [ngClass]=\"{'navmenu--collapsable': collapsable}\"> <div  class=\"navmenu__item\" *ngFor=\"let nav of navs\"> <a (click)=\"selected()\"title=\"{{nav.title}}\">{{nav.title}}</a> </div> </div>"
})
export class NavmenuComponent implements OnInit {
    @Input('navs') public navs: Nav[];
    @Input('open') public open: boolean;
    @Input('collapsable') public collapsable: boolean;
    @Input('showIcons') public showIcons: boolean;
    @Input('customClass') public customClass: any;
    @Input('shadow') public shadow: any;
    constructor(
    ) {

    }
    public ngOnInit() {
    }
    /**
     * openCollapsable
     */
    public openCollapsable() {
        this.collapsable = !this.collapsable;
    }
}
