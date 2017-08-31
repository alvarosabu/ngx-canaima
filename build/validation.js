var Validation = (function () {
    /**
     * @param {?=} type
     * @param {?=} value
     * @param {?=} msg
     */
    function Validation(type, value, msg) {
        this.type = type;
        this.value = value;
        this.msg = msg;
    }
    return Validation;
}());
export { Validation };
function Validation_tsickle_Closure_declarations() {
    /** @type {?} */
    Validation.prototype.type;
    /** @type {?} */
    Validation.prototype.value;
    /** @type {?} */
    Validation.prototype.msg;
}
