import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
var InputControlService = (function () {
    function InputControlService() {
    }
    /**
     * @param {?} inputs
     * @return {?}
     */
    InputControlService.prototype.toFormGroup = function (inputs) {
        var /** @type {?} */ group = {};
        var /** @type {?} */ validations = [];
        inputs.forEach(function (input) {
            if (input.validations === undefined) {
                group[input.key] = new FormControl(input.value || '');
            }
            else {
                input.validations.forEach(function (validation) {
                    var /** @type {?} */ valFormat;
                    var /** @type {?} */ type = validation.type;
                    if (type === 'pattern') {
                        valFormat = Validators.pattern(validation.value);
                    }
                    else if (type === 'min') {
                        valFormat = Validators.min(validation.value);
                    }
                    else if (type === 'max') {
                        valFormat = Validators.max(validation.value);
                    }
                    else {
                        valFormat = Validators[type];
                    }
                    validations.push(valFormat);
                });
                group[input.key] = new FormControl(input.value || '', validations);
                validations = [];
            }
            /* group[input.key] = control ? new FormControl(input.value || '', Validators.required) : new FormControl(input.value || ''); */
        });
        return new FormGroup(group);
    };
    return InputControlService;
}());
export { InputControlService };
InputControlService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
InputControlService.ctorParameters = function () { return []; };
function InputControlService_tsickle_Closure_declarations() {
    /** @type {?} */
    InputControlService.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    InputControlService.ctorParameters;
}
