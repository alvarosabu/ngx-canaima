import { Action } from '../action';
export class EmptyState {
     public title?: string;
     public msg?: string;
     public img?: string;
     public actions?: Action[];
     public footer?: any;
     constructor(
         options: {
            title?: string,
            msg?: string,
            img?: string,
            actions?: Action[];
            footer?: any;
         }
     ) {
        this.title = options.title;
        this.msg = options.msg;
        this.img = options.img;
        this.actions = options.actions;
        this.footer = options.footer;
     }
}
