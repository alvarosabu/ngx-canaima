import { Action } from './../../action';
import { ListItemBase } from './../list-item-base';
export class ListItemIcon extends ListItemBase {
    public icon?: string;
    public prefix?: string;
    constructor(
        options: {} = {}
    ) {
        super(options);
        this.icon = options['icon'] || null;
        this.prefix = options['prefix'] || null;
    }
}
