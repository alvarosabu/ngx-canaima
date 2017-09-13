import { Action } from './../../action';
import { ListItemBase } from './../list-item-base';
export class ListItemCheck extends ListItemBase {
    public least?: string;
    constructor(
        options: {} = {}
    ) {
        super(options);
        this.least = options['least'] || null;
    }
}
