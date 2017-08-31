import { Component, Input } from '@angular/core';
var CardIllustrationComponent = (function () {
    function CardIllustrationComponent() {
    }
    return CardIllustrationComponent;
}());
export { CardIllustrationComponent };
CardIllustrationComponent.decorators = [
    { type: Component, args: [{
                selector: 'as-card-illustration',
                template: "<div class=\"card  card--illustration card--{{orientation}} shadow-{{shadow}}  {{customClass}}\" > <div class=\"card__options card__options--left\" *ngIf=\"optionsLeft?.length > 0\"> <div class=\"card__option\"  *ngFor=\"let option of optionsLeft\" (click)=\"option.callback()\"> <button class=\"btn btn-link\"  (click)=\"option.callback()\"> <i class=\"{{option.prefix}} {{option.prefix}}-{{option.icon}}\"></i> </button> </div> </div> <div class=\"card__options card__options--right\"  *ngIf=\"optionsRight?.length > 0\"> <div class=\"card__option\"  [hidden]=\"option.dropdown !== undefined\"  *ngFor=\"let option of optionsRight\" > <button class=\"btn btn-link\"  (click)=\"option.callback()\"> <i class=\"{{option.prefix}} {{option.prefix}}-{{option.icon}}\"></i> </button> </div> <div class=\"card__option\" [hidden]=\"option.dropdown === undefined\" dropdown *ngFor=\"let option of optionsRight\"> <button dropdownToggle class=\"btn btn-link dropdown-toggle\"> <i class=\"{{option.prefix}} {{option.prefix}}-{{option.icon}}\"></i> </button> <ul *dropdownMenu class=\"dropdown-menu dropdown-menu-right\" [hidden]=\"option.dropdown !== undefined\" role=\"menu\"> <li *ngFor=\"let choice of option.dropdown\"> <a class=\"dropdown-item\" (click)=\"choice.callback()\"><i class=\"{{option.prefix}} {{option.prefix}}-{{choice.icon}}\"></i>{{choice.label}}</a> </li> </ul> </div> </div> <div class=\"card__header card--illustration__header\"> <div class=\"card--illustration__img\"  [ngStyle]=\"{'background-image': img && 'url(' + img + ')'}\"> </div> </div> <div class=\"card__flex\"> <div class=\"card__body\"> <div class=\"card__fabs\"> <div class=\"btn btn-fab {{fab.customClass}} btn-fab-{{fab.size}}\" *ngIf=\"fab\" (click)=\"fab.callback()\"> <i class=\"{{fab.prefix}} {{fab.prefix}}-{{fab.icon}}\"></i> </div> </div> <h4 class=\"card__title\" *ngIf=\"title\">{{title}}</h4> <h6 class=\"card__subtitle\" *ngIf=\"subtitle\">{{subtitle}}</h6> <div #cardContent> <ng-content selector=\".card__content\" ></ng-content> </div> <p class=\"card__msg\"  *ngIf=\"cardContent.children.length == 0\"> {{msg}} </p> </div> <div class=\"card__footer\"  *ngIf=\"actions\"> <div class=\"card__actions\" [ngStyle]=\"{'justify-content': footer.justify}\"> <button class=\"btn {{action?.customClass}} card__action\"   *ngFor=\"let action of actions\"  [disabled]=\"action.disabled\"  (click)=\"action.callback()\"> {{action.label}} </button> </div> </div> </div> </div>"
            },] },
];
/**
 * @nocollapse
 */
CardIllustrationComponent.ctorParameters = function () { return []; };
CardIllustrationComponent.propDecorators = {
    'img': [{ type: Input, args: ['img',] },],
    'title': [{ type: Input, args: ['title',] },],
    'orientation': [{ type: Input, args: ['orientation',] },],
    'subtitle': [{ type: Input, args: ['subtitle',] },],
    'customClass': [{ type: Input, args: ['customClass',] },],
    'footer': [{ type: Input, args: ['footer',] },],
    'msg': [{ type: Input, args: ['msg',] },],
    'fab': [{ type: Input, args: ['fab',] },],
    'optionsLeft': [{ type: Input, args: ['optionsLeft',] },],
    'optionsRight': [{ type: Input, args: ['optionsRight',] },],
    'shadow': [{ type: Input, args: ['shadow',] },],
    'actions': [{ type: Input, args: ['actions',] },],
};
function CardIllustrationComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CardIllustrationComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    CardIllustrationComponent.ctorParameters;
    /** @type {?} */
    CardIllustrationComponent.propDecorators;
    /** @type {?} */
    CardIllustrationComponent.prototype.img;
    /** @type {?} */
    CardIllustrationComponent.prototype.title;
    /** @type {?} */
    CardIllustrationComponent.prototype.orientation;
    /** @type {?} */
    CardIllustrationComponent.prototype.subtitle;
    /** @type {?} */
    CardIllustrationComponent.prototype.customClass;
    /** @type {?} */
    CardIllustrationComponent.prototype.footer;
    /** @type {?} */
    CardIllustrationComponent.prototype.msg;
    /** @type {?} */
    CardIllustrationComponent.prototype.fab;
    /** @type {?} */
    CardIllustrationComponent.prototype.optionsLeft;
    /** @type {?} */
    CardIllustrationComponent.prototype.optionsRight;
    /** @type {?} */
    CardIllustrationComponent.prototype.shadow;
    /** @type {?} */
    CardIllustrationComponent.prototype.actions;
}
