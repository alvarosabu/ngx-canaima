import { Action } from './../action';
import { ActionDropdown } from './../action-dropdown';
export class CardBase {
    public title?: string;
    public subtitle?: string;
    public msg?: string;
    public actions?: Action[];
    public optionsLeft?: Action[];
    public optionsRight?: (Action | ActionDropdown)[];
    public customClass?: string;
    public shadow?: string;
    public footer?: any;
    constructor(
        options: {
            _id?: string,
            title?: string,
            subtitle?: string,
            msg?: string,
            actions?: Action[],
            optionsLeft?: Action[];
            optionsRight?: Action[];
            customClass?: string,
            shadow?: string;
            footer?: any;
        }
    ) {
        this.title = options.title;
        this.subtitle = options.subtitle;
        this.msg = options.msg;
        this.actions = options.actions;
        this.optionsLeft = options.optionsLeft;
        this.optionsRight = options.optionsRight;
        this.customClass = options.customClass;
        this.shadow = options.shadow;
        this.footer = options.footer;
    }
}
