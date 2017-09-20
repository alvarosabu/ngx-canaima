import { Action } from '../action';
export class Modal {
    public title?: string;
    public img?: string;
    public open?: boolean;
    public size?: string;
    public msg?: string;
    public customClass?: string;
    public onClosed?: any;
    public actions?: Action[];
    constructor(
        options: {
            title?: string,
            img?: string,
            open?: boolean,
            size?: string,
            msg?: string,
            customClass?: string,
            onClosed?: any,
            actions?: Action[]
        }
    ) {
        this.title = options.title;
        this.img = options.img;
        this.open = options.open;
        this.size = options.size;
        this.msg = options.msg;
        this.customClass = options.customClass;
        this.onClosed = options.onClosed;
        this.actions = options.actions;
    }
}
