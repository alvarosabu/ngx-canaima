import { Action } from './../action';
export class ProfileDropdown {
    public title?: string;
    public img?: string;
    public defaultImg?: string;
    public prefix?: string;
    public caret?: string;
    public bubble?: boolean;
    public dropdown?: Action[];
    public lastAction?: Action;
    public customClass?: string;

    constructor(
        options: {
            title?: string,
            img?: string;
            defaultImg?: string;
            prefix?: string,
            caret?: string,
            bubble?: boolean,
            dropdown?: Action[],
            lastAction?: Action,
            customClass?: string

        }
    ) {
        this.title = options.title;
        this.img = options.img;
        this.defaultImg = options.defaultImg;
        this.prefix = options.prefix || 'mdi';
        this.caret = options.caret || 'chevron-down';
        this.bubble = options.bubble;
        this.dropdown = options.dropdown;
        this.lastAction = options.lastAction;
        this.customClass = options.customClass;

    }
}


