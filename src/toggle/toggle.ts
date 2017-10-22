import { Action } from './../action';
export class Toggle {
    public toggle?: Action;
    constructor(
        options: {
            toggle?: Action
        }
    ) {
        this.toggle = options.toggle;
    }
}
