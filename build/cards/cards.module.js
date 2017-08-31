import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardImageComponent } from './card-image/card-image.component';
import { CardBgComponent } from './card-bg/card-bg.component';
import { BsDropdownModule } from 'ngx-bootstrap/index';
import { CardDataComponent } from './card-data/card-data.component';
import { CardProfileComponent } from './card-profile/card-profile.component';
import { CardIllustrationComponent } from './card-illustration/card-illustration.component';
var CardsModule = (function () {
    function CardsModule() {
    }
    return CardsModule;
}());
export { CardsModule };
CardsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    BsDropdownModule
                ],
                exports: [
                    CommonModule,
                    CardComponent,
                    CardImageComponent,
                    CardBgComponent,
                    CardDataComponent,
                    CardProfileComponent,
                    CardIllustrationComponent
                ],
                declarations: [
                    CardComponent,
                    CardImageComponent,
                    CardBgComponent,
                    CardDataComponent,
                    CardProfileComponent,
                    CardIllustrationComponent
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
CardsModule.ctorParameters = function () { return []; };
function CardsModule_tsickle_Closure_declarations() {
    /** @type {?} */
    CardsModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    CardsModule.ctorParameters;
}
