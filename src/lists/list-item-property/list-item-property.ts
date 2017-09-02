import { Action } from './../../action';
import { ListItemBase } from './../list-item-base';
export class ListItemProperty extends ListItemBase {
    public key?: string;
    public value?: string;
    constructor(
        options: {} = {}
    ) {
        super(options);
        this.key = options['key'] || null;
        this.value = options['value'] || null;
    }
}
