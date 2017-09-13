import { Action } from './../../action';
import { ListItemBase } from './../list-item-base';
export class ListItemFileQueue extends ListItemBase {
    public data?: any;
    constructor(
        options: {} = {}
    ) {
        super(options);
        this.data = options['data'] || null;
    }
}
