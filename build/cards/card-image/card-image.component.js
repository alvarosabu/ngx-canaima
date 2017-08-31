import { Component, Input } from '@angular/core';
var CardImageComponent = (function () {
    function CardImageComponent() {
    }
    return CardImageComponent;
}());
export { CardImageComponent };
CardImageComponent.decorators = [
    { type: Component, args: [{
                selector: 'as-card-image',
                template: "<div class=\"card  card--image card--{{orientation}} shadow-{{shadow}}  {{customClass}}\" > <div class=\"card__options card__options--left\" *ngIf=\"optionsLeft?.length > 0\"> <div class=\"card__option\"  *ngFor=\"let option of optionsLeft\" (click)=\"option.callback()\"> <button class=\"btn btn-link\"  (click)=\"option.callback()\"> <i class=\"{{option.prefix}} {{option.prefix}}-{{option.icon}}\"></i> </button> </div> </div> <div class=\"card__options card__options--right\"  *ngIf=\"optionsRight?.length > 0\"> <div class=\"card__option\"  [hidden]=\"option.dropdown !== undefined\"  *ngFor=\"let option of optionsRight\" > <button class=\"btn btn-link\"  (click)=\"option.callback()\"> <i class=\"{{option.prefix}} {{option.prefix}}-{{option.icon}}\"></i> </button> </div> <div class=\"card__option\" [hidden]=\"option.dropdown === undefined\" dropdown *ngFor=\"let option of optionsRight\"> <button dropdownToggle class=\"btn btn-link dropdown-toggle\"> <i class=\"{{option.prefix}} {{option.prefix}}-{{option.icon}}\"></i> </button> <ul *dropdownMenu class=\"dropdown-menu dropdown-menu-right\" [hidden]=\"option.dropdown !== undefined\" role=\"menu\"> <li *ngFor=\"let choice of option.dropdown\"> <a class=\"dropdown-item\" (click)=\"choice.callback()\"><i class=\"{{option.prefix}} {{option.prefix}}-{{choice.icon}}\"></i>{{choice.label}}</a> </li> </ul> </div> </div> <div class=\"card__header card--image__header\"> <div class=\"card--image__img\"  [ngStyle]=\"{'background-image': img && 'url(' + img + ')'}\"> </div> </div> <div class=\"card__flex\"> <div class=\"card__body\"> <div class=\"card__fabs\"> <div class=\"btn btn-fab {{fab.customClass}} btn-fab-{{fab.size}}\" *ngIf=\"fab\" (click)=\"fab.callback()\"> <i class=\"{{fab.prefix}} {{fab.prefix}}-{{fab.icon}}\"></i> </div> </div> <h4 class=\"card__title\">{{title}}</h4> <h6 class=\"card__subtitle\">{{subtitle}}</h6> <p class=\"card__msg\"> {{msg}} </p> </div> <div class=\"card__footer\"  *ngIf=\"actions\"> <div class=\"card__actions\" [ngStyle]=\"{'justify-content': footer.justify}\"> <button class=\"btn {{action?.customClass}} card__action\"   *ngFor=\"let action of actions\"  [disabled]=\"action.disabled\"  (click)=\"action.callback()\"> {{action.label}} </button> </div> </div> </div> </div>"
            },] },
];
/**
 * @nocollapse
 */
CardImageComponent.ctorParameters = function () { return []; };
CardImageComponent.propDecorators = {
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
function CardImageComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CardImageComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    CardImageComponent.ctorParameters;
    /** @type {?} */
    CardImageComponent.propDecorators;
    /** @type {?} */
    CardImageComponent.prototype.img;
    /** @type {?} */
    CardImageComponent.prototype.title;
    /** @type {?} */
    CardImageComponent.prototype.orientation;
    /** @type {?} */
    CardImageComponent.prototype.subtitle;
    /** @type {?} */
    CardImageComponent.prototype.customClass;
    /** @type {?} */
    CardImageComponent.prototype.footer;
    /** @type {?} */
    CardImageComponent.prototype.msg;
    /** @type {?} */
    CardImageComponent.prototype.fab;
    /** @type {?} */
    CardImageComponent.prototype.optionsLeft;
    /** @type {?} */
    CardImageComponent.prototype.optionsRight;
    /** @type {?} */
    CardImageComponent.prototype.shadow;
    /** @type {?} */
    CardImageComponent.prototype.actions;
}
