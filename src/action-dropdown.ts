import { Action } from './action';

export class ActionDropdown {
    public label: string;
    public icon: string;
    public iconActive: string;
    public prefix: string;
    public customClass: string;
    public dropdown: Action[];
    constructor(
        label = null,
        dropdown: Action[] = [
            new Action({
                label: 'Action 1'
            })
        ],
        icon = 'dots-vertical',
        iconActive= null,
        customClass = 'btn-link',
        prefix = 'mdi'
    ) {
        this.label = label;
        this.icon = icon;
        this.iconActive = iconActive;
        this.prefix = prefix;
        this.customClass = customClass;
        this.dropdown = dropdown;
    }
}
