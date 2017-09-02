import { Action } from './../../action';
import { CardBase } from './../card-base';
export class CardImage extends CardBase {
    public img?: string;
    public fab?: Action[];
    constructor(
        options: {} = {}
    ) {
        super(options);
        this.img = options['img'] || null;
        this.fab = options['fab'] || null;
    }
}
