import {
    Component,
    Input,

} from '@angular/core';
import { Action } from './../../action';
@Component({
    selector: 'as-card-profile',
    template: "<div class=\"card card--profile {{customClass}} shadow-{{shadow}}\" > <div class=\"card__header\"> <div class=\"card--profile__img\"  [ngStyle]=\"{'background-image': bg && 'url(' + bg + ')'}\"> </div> <div class=\"card__options card__options--left\" *ngIf=\"optionsLeft?.length > 0\"> <div class=\"card__option\" *ngFor=\"let option of optionsLeft\" (click)=\"option.callback()\"> <button class=\"btn btn-link\" (click)=\"option.callback()\"> <i class=\"{{option.prefix}} {{option.prefix}}-{{option.icon}}\"></i> </button> </div> </div>  <div class=\"card__options card__options--right\" *ngIf=\"optionsRight?.length > 0\"> <div class=\"card__option\" [hidden]=\"option.dropdown !== undefined\" *ngFor=\"let option of optionsRight\" (click)=\"option.callback()\"> <button class=\"btn btn-link\" (click)=\"option.callback()\"> <i class=\"{{option.prefix}} {{option.prefix}}-{{option.icon}}\"></i> </button> </div> <div class=\"card__option\" [hidden]=\"option.dropdown === undefined\" dropdown *ngFor=\"let option of optionsRight\"> <button dropdownToggle class=\"btn btn-link dropdown-toggle\"> <i class=\"{{option.prefix}} {{option.prefix}}-{{option.icon}}\"></i> </button> <ul *dropdownMenu class=\"dropdown-menu dropdown-menu-right\" [hidden]=\"option.dropdown !== undefined\" role=\"menu\"> <li *ngFor=\"let choice of option.dropdown\"> <a class=\"dropdown-item\" (click)=\"choice.callback()\"><i class=\"{{option.prefix}} {{option.prefix}}-{{choice.icon}}\"></i>{{choice.label}}</a> </li> </ul> </div> </div> </div> <div class=\"card__body\"> <div class=\"card__subheader\"> <div class=\"card__avatar circle shadow-1\" [ngStyle]=\"{'background-image': avatar && 'url(' + avatar + ')'}\"> </div> <div class=\"btn btn-fab {{fab.customClass}} btn-fab-{{fab.size}}\" *ngIf=\"fab\" (click)=\"fab.callback()\"> <i class=\"{{fab.prefix}} {{fab.prefix}}-{{fab.icon}}\"></i> </div> </div> <h4 class=\"card__title\">{{title}}</h4> <h6 class=\"card__subtitle\">{{subtitle}}</h6> <!-- single slot transclusion here --> <ng-content select=\".card__content\"></ng-content> </div> <div class=\"card__footer\" *ngIf=\"stats?.length > 0\"> <div class=\"card__stats\"> <div class=\"card__stat\"  *ngFor=\"let stat of stats\"> <span class=\"stat__value\">{{stat.value }}</span> <span class=\"stat__line\"></span> <span class=\"stat__label\">{{stat.label}}</span> </div> </div> <div class=\"card__actions\" [ngStyle]=\"{'justify-content': footer.justify, 'align-items': footer.alignment}\"> <button class=\"btn {{action?.customClass}} card__action\"   *ngFor=\"let action of actions\"  [disabled]=\"action.disabled\"  (click)=\"action.callback()\"> {{action.label}} </button> </div> </div> </div>",

})
export class CardProfileComponent {
    @Input('bg') public bg: string;
    @Input('avatar') public avatar: string;
    @Input('title') public title: string;
    @Input('subtitle') public subtitle: string;
    @Input('msg') public msg: string;
    @Input('fab') public fab: any;
    @Input('stats') public stats: [any];
    @Input('customClass') public customClass: string;
    @Input('shadow') public shadow: string;
    @Input('optionsLeft') public optionsLeft: Action[];
    @Input('optionsRight') public optionsRight: any[];
    @Input('actions') public actions: Action[];
    @Input('footer') public footer: any = {
        justify: 'flex-end',
        alignment: 'center'
    };
}