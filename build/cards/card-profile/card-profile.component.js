import { Component, Input, } from '@angular/core';
var CardProfileComponent = (function () {
    function CardProfileComponent() {
    }
    return CardProfileComponent;
}());
export { CardProfileComponent };
CardProfileComponent.decorators = [
    { type: Component, args: [{
                selector: 'as-card-profile',
                template: "<div class=\"card card--profile {{customClass}} shadow-{{shadow}}\" > <div class=\"card__header\"> <div class=\"card--profile__img\"  [ngStyle]=\"{'background-image': bg && 'url(' + bg + ')'}\"> </div> <div class=\"card__options card__options--left\" *ngIf=\"optionsLeft?.length > 0\"> <div class=\"card__option\" *ngFor=\"let option of optionsLeft\" (click)=\"option.callback()\"> <button class=\"btn btn-link\" (click)=\"option.callback()\"> <i class=\"{{option.prefix}} {{option.prefix}}-{{option.icon}}\"></i> </button> </div> </div>  <div class=\"card__options card__options--right\" *ngIf=\"optionsRight?.length > 0\"> <div class=\"card__option\" [hidden]=\"option.dropdown !== undefined\" *ngFor=\"let option of optionsRight\" (click)=\"option.callback()\"> <button class=\"btn btn-link\" (click)=\"option.callback()\"> <i class=\"{{option.prefix}} {{option.prefix}}-{{option.icon}}\"></i> </button> </div> <div class=\"card__option\" [hidden]=\"option.dropdown === undefined\" dropdown *ngFor=\"let option of optionsRight\"> <button dropdownToggle class=\"btn btn-link dropdown-toggle\"> <i class=\"{{option.prefix}} {{option.prefix}}-{{option.icon}}\"></i> </button> <ul *dropdownMenu class=\"dropdown-menu dropdown-menu-right\" [hidden]=\"option.dropdown !== undefined\" role=\"menu\"> <li *ngFor=\"let choice of option.dropdown\"> <a class=\"dropdown-item\" (click)=\"choice.callback()\"><i class=\"{{option.prefix}} {{option.prefix}}-{{choice.icon}}\"></i>{{choice.label}}</a> </li> </ul> </div> </div> </div> <div class=\"card__body\"> <div class=\"card__subheader\"> <div class=\"card__avatar circle shadow-1\" [ngStyle]=\"{'background-image': avatar && 'url(' + avatar + ')'}\"> </div> <div class=\"btn btn-fab {{fab.customClass}} btn-fab-{{fab.size}}\" *ngIf=\"fab\" (click)=\"fab.callback()\"> <i class=\"{{fab.prefix}} {{fab.prefix}}-{{fab.icon}}\"></i> </div> </div> <h4 class=\"card__title\">{{title}}</h4> <h6 class=\"card__subtitle\">{{subtitle}}</h6> <!-- single slot transclusion here --> <ng-content select=\".card__content\"></ng-content> </div> <div class=\"card__footer\" *ngIf=\"stats?.length > 0\"> <div class=\"card__stats\"> <div class=\"card__stat\"  *ngFor=\"let stat of stats\"> <span class=\"stat__value\">{{stat.value }}</span> <span class=\"stat__line\"></span> <span class=\"stat__label\">{{stat.label}}</span> </div> </div> <div class=\"card__actions\" [ngStyle]=\"{'justify-content': footer.justify}\"> <button class=\"btn {{action?.customClass}} card__action\"   *ngFor=\"let action of actions\"  [disabled]=\"action.disabled\"  (click)=\"action.callback()\"> {{action.label}} </button> </div> </div> </div>",
            },] },
];
/**
 * @nocollapse
 */
CardProfileComponent.ctorParameters = function () { return []; };
CardProfileComponent.propDecorators = {
    'bg': [{ type: Input, args: ['bg',] },],
    'avatar': [{ type: Input, args: ['avatar',] },],
    'title': [{ type: Input, args: ['title',] },],
    'subtitle': [{ type: Input, args: ['subtitle',] },],
    'msg': [{ type: Input, args: ['msg',] },],
    'fab': [{ type: Input, args: ['fab',] },],
    'stats': [{ type: Input, args: ['stats',] },],
    'customClass': [{ type: Input, args: ['customClass',] },],
    'shadow': [{ type: Input, args: ['shadow',] },],
    'optionsLeft': [{ type: Input, args: ['optionsLeft',] },],
    'optionsRight': [{ type: Input, args: ['optionsRight',] },],
    'actions': [{ type: Input, args: ['actions',] },],
    'footer': [{ type: Input, args: ['footer',] },],
};
function CardProfileComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CardProfileComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    CardProfileComponent.ctorParameters;
    /** @type {?} */
    CardProfileComponent.propDecorators;
    /** @type {?} */
    CardProfileComponent.prototype.bg;
    /** @type {?} */
    CardProfileComponent.prototype.avatar;
    /** @type {?} */
    CardProfileComponent.prototype.title;
    /** @type {?} */
    CardProfileComponent.prototype.subtitle;
    /** @type {?} */
    CardProfileComponent.prototype.msg;
    /** @type {?} */
    CardProfileComponent.prototype.fab;
    /** @type {?} */
    CardProfileComponent.prototype.stats;
    /** @type {?} */
    CardProfileComponent.prototype.customClass;
    /** @type {?} */
    CardProfileComponent.prototype.shadow;
    /** @type {?} */
    CardProfileComponent.prototype.optionsLeft;
    /** @type {?} */
    CardProfileComponent.prototype.optionsRight;
    /** @type {?} */
    CardProfileComponent.prototype.actions;
    /** @type {?} */
    CardProfileComponent.prototype.footer;
}
