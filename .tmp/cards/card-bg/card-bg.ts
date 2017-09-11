import { Action } from './../../action';
import { CardBase } from './../card-base';
export class CardBg extends CardBase {
    public bg?: string;
    public fab?: Action[];
    constructor(
        options: {} = {}
    ) {
        super(options);
        this.bg = options['bg'] || null;
        this.fab = options['fab'] || null;
    }
}
