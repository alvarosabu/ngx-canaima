import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormInputComponent } from './dynamic-form-input.component';
import { InputControlService } from '../input-control.service';
import { DynamicFormCheckboxComponent } from './dynamic-form-checkbox.component';
var DynamicFormsModule = (function () {
    function DynamicFormsModule() {
    }
    return DynamicFormsModule;
}());
export { DynamicFormsModule };
DynamicFormsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                ],
                exports: [
                    ReactiveFormsModule,
                    DynamicFormComponent,
                    DynamicFormInputComponent,
                    DynamicFormCheckboxComponent
                ],
                declarations: [
                    DynamicFormComponent,
                    DynamicFormInputComponent,
                    DynamicFormCheckboxComponent
                ],
                providers: [
                    InputControlService
                ],
            },] },
];
/**
 * @nocollapse
 */
DynamicFormsModule.ctorParameters = function () { return []; };
function DynamicFormsModule_tsickle_Closure_declarations() {
    /** @type {?} */
    DynamicFormsModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    DynamicFormsModule.ctorParameters;
}
