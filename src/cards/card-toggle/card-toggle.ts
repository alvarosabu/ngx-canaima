
import { CardBase } from './../card-base';
export class CardToggle extends CardBase {
    public toggle?: string;
    public img?: string;
    public prefix?: string;
    public icon?: string;
    constructor(
        options: {} = {}
    ) {
        super(options);
        this.toggle = options['toggle'] || null;
        this.img = options['img'] || null;
        this.prefix = options['prefix'] || 'mdi';
        this.icon = options['icon'] || null;
    }
}

