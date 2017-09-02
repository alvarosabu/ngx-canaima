import { Action } from './../action';
export class ListItemBase {
    public _id?: string | number;
    public title?: string;
    public subtitle?: string;
    public hasLine?: boolean;
    public actions?: Action[];
    public customClass?: boolean;
    constructor(
        options: {
            _id?: string,
            title?: string,
            subtitle?: string,
            hasLine?: boolean,
            actions?: Action[],
            customClass?: boolean,
        }
    ) {
        this._id = options._id;
        this.title = options.title;
        this.subtitle = options.subtitle;
        this.hasLine = options.hasLine;
        this.actions = options.actions;
        this.customClass = options.customClass;
    }
}
