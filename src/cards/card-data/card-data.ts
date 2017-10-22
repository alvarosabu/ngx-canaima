
import { CardBase } from './../card-base';
export class CardData extends CardBase {
    public img?: string;
    public prefix?: string;
    public icon?: string;
    constructor(
        options: {} = {}
    ) {
        super(options);
        this.img = options['img'] || null;
        this.prefix = options['prefix'] || 'mdi';
        this.icon = options['icon'] || null;
    }
}
