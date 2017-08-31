var InputBase = (function () {
    /**
     * @param {?=} options
     */
    function InputBase(options) {
        if (options === void 0) { options = {}; }
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.validations = options.validations;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.customClass = options.customClass === undefined ? 'fcol-xs-12' : options.customClass;
    }
    return InputBase;
}());
export { InputBase };
function InputBase_tsickle_Closure_declarations() {
    /** @type {?} */
    InputBase.prototype.value;
    /** @type {?} */
    InputBase.prototype.key;
    /** @type {?} */
    InputBase.prototype.label;
    /** @type {?} */
    InputBase.prototype.validations;
    /** @type {?} */
    InputBase.prototype.order;
    /** @type {?} */
    InputBase.prototype.controlType;
    /** @type {?} */
    InputBase.prototype.customClass;
}
