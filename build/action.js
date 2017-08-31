var Action = (function () {
    /**
     * @param {?=} label
     * @param {?=} callback
     * @param {?=} icon
     * @param {?=} iconActive
     * @param {?=} value
     * @param {?=} customClass
     * @param {?=} prefix
     * @param {?=} size
     */
    function Action(label, callback, icon, iconActive, value, customClass, prefix, size) {
        if (label === void 0) { label = null; }
        if (callback === void 0) { callback = function () {
            console.log('Simple action');
        }; }
        if (icon === void 0) { icon = null; }
        if (iconActive === void 0) { iconActive = null; }
        if (value === void 0) { value = false; }
        if (customClass === void 0) { customClass = 'btn-link'; }
        if (prefix === void 0) { prefix = 'mdi'; }
        if (size === void 0) { size = 'md'; }
        this.label = label;
        this.icon = icon;
        this.iconActive = iconActive;
        this.prefix = prefix;
        this.customClass = customClass;
        this.callback = callback;
        this.size = size;
        this.value = value;
    }
    return Action;
}());
export { Action };
function Action_tsickle_Closure_declarations() {
    /** @type {?} */
    Action.prototype.label;
    /** @type {?} */
    Action.prototype.callback;
    /** @type {?} */
    Action.prototype.icon;
    /** @type {?} */
    Action.prototype.iconActive;
    /** @type {?} */
    Action.prototype.value;
    /** @type {?} */
    Action.prototype.size;
    /** @type {?} */
    Action.prototype.prefix;
    /** @type {?} */
    Action.prototype.customClass;
}
