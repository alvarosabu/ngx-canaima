import {
    Component,
    Input
} from '@angular/core';
import { Action } from '../../action';
@Component({
    selector: 'as-card-image',
    template: "<div class=\"card  card--image card--{{orientation}} shadow-{{shadow}}  {{customClass}}\" > <div class=\"card__options card__options--left\" *ngIf=\"optionsLeft?.length > 0\"> <div class=\"card__option\"  *ngFor=\"let option of optionsLeft\" (click)=\"option.callback()\"> <button class=\"btn btn-link\"  (click)=\"option.callback()\"> <i class=\"{{option.prefix}} {{option.prefix}}-{{option.icon}}\"></i> </button> </div> </div> <div class=\"card__options card__options--right\"  *ngIf=\"optionsRight?.length > 0\"> <div class=\"card__option\"  [hidden]=\"option.dropdown !== undefined\"  *ngFor=\"let option of optionsRight\" > <button class=\"btn btn-link\"  (click)=\"option.callback()\"> <i class=\"{{option.prefix}} {{option.prefix}}-{{option.icon}}\"></i> </button> </div> <div class=\"card__option\" [hidden]=\"option.dropdown === undefined\" dropdown *ngFor=\"let option of optionsRight\"> <button dropdownToggle class=\"btn btn-link dropdown-toggle\"> <i class=\"{{option.prefix}} {{option.prefix}}-{{option.icon}}\"></i> </button> <ul *dropdownMenu class=\"dropdown-menu dropdown-menu-right\" [hidden]=\"option.dropdown !== undefined\" role=\"menu\"> <li *ngFor=\"let choice of option.dropdown\"> <a class=\"dropdown-item\" (click)=\"choice.callback()\"><i class=\"{{option.prefix}} {{option.prefix}}-{{choice.icon}}\"></i>{{choice.label}}</a> </li> </ul> </div> </div> <div class=\"card__header card--image__header\"> <div class=\"card--image__img\"  [ngStyle]=\"{'background-image': img && 'url(' + img + ')'}\"> </div> </div> <div class=\"card__flex\"> <div class=\"card__body\"> <div class=\"card__fabs\" *ngIf=\"fab\"> <div class=\"btn btn-fab {{fab.customClass}} btn-fab-{{fab.size}}\" *ngIf=\"fab\" (click)=\"fab.callback()\"> <i class=\"{{fab.prefix}} {{fab.prefix}}-{{fab.icon}}\"></i> </div> </div> <h4  class=\"card__title\" *ngIf=\"title\">{{title}}</h4> <h6  class=\"card__subtitle\" *ngIf=\"subtitle\">{{subtitle}}</h6> <div #cardContent> <ng-content selector=\".card__content\" ></ng-content> </div> <p class=\"card__msg\"  *ngIf=\"cardContent.children.length == 0\"> {{msg}} </p> </div> <div class=\"card__footer\"  *ngIf=\"actions\"> <div class=\"card__actions\"  [ngStyle]=\"{'justify-content': footer.justify, 'align-items': footer.alignment}\"> <button class=\"btn {{action?.customClass}} card__action\"   *ngFor=\"let action of actions\"  [disabled]=\"action.disabled\"  (click)=\"action.callback()\"> {{action.label}} </button> </div> </div> </div> </div>"
})
export class CardImageComponent {
    @Input('img') public img: string;
    @Input('title') public title: string;
    @Input('orientation') public orientation;
    @Input('subtitle') public subtitle: string;
    @Input('customClass') public customClass: string;
    @Input('msg') public msg: string;
    @Input('fab') public fab: Action;
    @Input('optionsLeft') public optionsLeft: Action[];
    @Input('optionsRight') public optionsRight: any;
    @Input('shadow') public shadow: string;
    @Input('actions') public actions: Action[];
    @Input('footer') public footer: any = {
        justify: 'flex-end',
        alignment: 'center'
    };
}
