import { Action } from './../../action';
import { ListItemBase } from './../list-item-base';
export class ListItemAvatar extends ListItemBase {
    public img?: string;
    public least?: string;
    constructor(
        options: {} = {}
    ) {
        super(options);
        this.img = options['img'] || null;
        this.least = options['least'] || null;
    }
}
