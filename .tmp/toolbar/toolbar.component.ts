

import {
    Component,
    OnInit,
    Input,
    Output,
    ViewEncapsulation
} from '@angular/core';
import { ToolbarMenuService } from './menu.service';
import { ActionDropdown } from '../action-dropdown';
import { Action } from '../action';
@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'as-toolbar',
    template: "<nav #toolbar class=\"toolbar toolbar--flex toolbar--default shadow-{{shadow}} {{customClass}}\" [ngClass]=\"{'toolbar--fixed': fixed}\"> <div class=\"container-fluid\"> <div  class=\"toolbar__brand\"  (click)=\"openCollapsable()\"> <img  class=\"toolbar__logo\"  *ngIf=\"brand && leftContent.children.length == 0\" [fxHide.xs]=\"brand && leftContent.children.length == 0\" [src]=\"brand?.logo\" alt=\"\"> <span  class=\"toolbar__logo\">{{brand?.name}}</span> <div class=\"material-burger left\" *ngIf=\"brand !== undefined && leftContent.children.length == 0\" [ngClass]=\"{'material-burger-transformed': collapsable}\" [fxHide.gt-xs]=\"brand !== undefined && leftContent.children.length == 0\"> <span></span> </div> </div> <div  class=\"nav toolbar__left\"  #leftContent  [ngStyle]=\"{'width': left + '%'}\" > <ng-content select=\".left-content\"> </ng-content> </div> <div  class=\"nav toolbar__center\"  #centerContent  [ngStyle]=\"{'width': center + '%'}\" > <ng-content select=\".center-content\"></ng-content> </div> <div  class=\"nav toolbar__right\" #rightContent [fxHide.xs]=\"true\" [ngStyle]=\"{'width': right + '%'}\" > <ng-content  select=\".right-content\"></ng-content> </div> <div  [ngClass]=\"{'toolbar__right': actions}\"> <div  class=\"toolbar__options\"> <div class=\"toolbar__option\"  [hidden]=\"option.dropdown != undefined\"   *ngFor=\"let option of actions\"> <button class=\"btn btn-link\"  (click)=\"option.callback()\"> <i class=\"{{option.prefix}} {{option.prefix}}-{{option.icon}}\"></i> </button> </div> <div class=\"toolbar__option\"  [hidden]=\"option.dropdown === undefined\"  dropdown  *ngFor=\"let option of actions\"> <button dropdownToggle class=\"btn btn-link dropdown-toggle\"> <i class=\"{{option.prefix}} {{option.prefix}}-{{option.icon}}\"></i> </button> <ul *dropdownMenu  class=\"dropdown-menu dropdown-menu-right\"  [hidden]=\"option.dropdown !== undefined\" role=\"menu\"> <li *ngFor=\"let choice of option.dropdown\"> <a class=\"dropdown-item\" (click)=\"choice.callback()\"><i class=\"{{option.prefix}} {{option.prefix}}-{{choice.icon}}\"></i>{{choice.label}}</a> </li> </ul> </div>  </div>  </div> </div> </nav>"
})
export class ToolbarComponent implements OnInit {
    @Input('brand') public brand: any;
    @Input('actions') public actions: [any];
    @Input('back') public back: string;
    @Input('title') public title: string;
    @Input('subtitle') public subtitle: any;
    @Input('shadow') public shadow: string;
    @Input('fixed') public fixed: boolean;
    @Input('customClass') public customClass: any;

    public collapsable = false;
    constructor(
        private menu: ToolbarMenuService
    ) {

    }
    public ngOnInit() {
    }
    /**
     * openCollapsable
     */
    public openCollapsable() {
        this.collapsable = !this.collapsable;
        this.menu.openMenu(this.collapsable);
    }
    public isActionDropdown(action: (Action | ActionDropdown)) {
        return action instanceof ActionDropdown;
    }
}
