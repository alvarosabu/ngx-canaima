import { Action } from './../action';
export class GridListItemBase {
    public _id?: string | number;
    public img?: string;
    public title?: string;
    public subtitle?: string;
    public action?: Action;
    public customClass?: string;
    public shadow?: string;
    public persistent?: boolean;
    constructor(
        options: {
            _id?: string,
            img?: string,
            title?: string,
            subtitle?: string,
            action?: Action,
            customClass?: string,
            shadow?: string;
            persistent?: boolean;
        }
    ) {
        this._id = options._id;
        this.img = options.img;
        this.title = options.title;
        this.subtitle = options.subtitle;
        this.action = options.action;
        this.customClass = options.customClass;
        this.shadow = options.shadow;
        this.persistent = options.persistent;
    }
}
