
import { CardBase } from './../card-base';
export class CardData extends CardBase {
    public img?: string;
    constructor(
        options: {} = {}
    ) {
        super(options);
        this.img = options['img'] || null;
    }
}
