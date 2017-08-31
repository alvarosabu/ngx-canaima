import { Component, Input, } from '@angular/core';
var CardDataComponent = (function () {
    function CardDataComponent() {
    }
    /**
     * @return {?}
     */
    CardDataComponent.prototype.ngOnInit = function () {
        this.hover = false;
    };
    return CardDataComponent;
}());
export { CardDataComponent };
CardDataComponent.decorators = [
    { type: Component, args: [{
                selector: 'as-card-data',
                template: "<div class=\"card card--data shadow-{{shadow}} {{customClass}}\"> <div class=\"card__thumb\"  *ngIf=\"img\" (mouseover)='hover = true' (mouseleave)='hover = false' > <div class=\"card--data__img circle\" [ngStyle]=\"{'background-image': img && 'url(' + img + ')'}\" *ngIf=\"!hover\"></div> <div class=\"checkbox\" *ngIf=\"hover\"> <label> <input type=\"checkbox\" value=\"\"> </label> </div> </div> <div class=\"card__content\"> <h5 class=\"card--data__title\">{{title}}</h5> <span class=\"card--data__subtitle\">{{subtitle}}</span> </div> <div class=\"card--data__actions\" *ngIf=\"actions\"> <i class=\"{{action.prefix}} {{action.prefix}}-{{action.value ? action.iconActive : action.icon}}\" (click)=\"action.callback(); action.value = ! action.value\" *ngFor=\"let action of actions\" ></i> </div> </div>"
            },] },
];
/**
 * @nocollapse
 */
CardDataComponent.ctorParameters = function () { return []; };
CardDataComponent.propDecorators = {
    'img': [{ type: Input, args: ['img',] },],
    'title': [{ type: Input, args: ['title',] },],
    'subtitle': [{ type: Input, args: ['subtitle',] },],
    'actions': [{ type: Input, args: ['actions',] },],
    'shadow': [{ type: Input, args: ['shadow',] },],
    'customClass': [{ type: Input, args: ['customClass',] },],
};
function CardDataComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CardDataComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    CardDataComponent.ctorParameters;
    /** @type {?} */
    CardDataComponent.propDecorators;
    /** @type {?} */
    CardDataComponent.prototype.img;
    /** @type {?} */
    CardDataComponent.prototype.title;
    /** @type {?} */
    CardDataComponent.prototype.subtitle;
    /** @type {?} */
    CardDataComponent.prototype.actions;
    /** @type {?} */
    CardDataComponent.prototype.shadow;
    /** @type {?} */
    CardDataComponent.prototype.customClass;
    /** @type {?} */
    CardDataComponent.prototype.hover;
}
