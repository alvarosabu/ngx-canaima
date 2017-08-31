import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsModule } from './cards/cards.module';
import { DynamicFormsModule } from './forms/dynamic-forms/dynamic-forms.module';
export { Action } from './action';
export { CardComponent, CardImageComponent, CardBgComponent, CardIllustrationComponent, CardDataComponent, CardProfileComponent } from './cards/index';
var NgxCanaimaModule = (function () {
    function NgxCanaimaModule() {
    }
    /**
     * @return {?}
     */
    NgxCanaimaModule.forRoot = function () {
        return {
            ngModule: NgxCanaimaModule,
            providers: []
        };
    };
    return NgxCanaimaModule;
}());
export { NgxCanaimaModule };
NgxCanaimaModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    CardsModule,
                    DynamicFormsModule
                ],
                declarations: [],
                exports: [
                    CardsModule,
                    DynamicFormsModule
                ]
            },] },
];
/**
 * @nocollapse
 */
NgxCanaimaModule.ctorParameters = function () { return []; };
function NgxCanaimaModule_tsickle_Closure_declarations() {
    /** @type {?} */
    NgxCanaimaModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    NgxCanaimaModule.ctorParameters;
}
