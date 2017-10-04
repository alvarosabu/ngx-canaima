
import { CardBase } from './../card-base';
export class CardNumber extends CardBase {

    public value?: string;
    public pipe?: string;
    public countTo?: any;
    public label?: string;
    public size?: string;
    constructor(
        options: {} = {}
    ) {
        super(options);
        this.value = options['value'] || null;
        this.pipe = options['pipe'] || null;
        this.countTo = options['countTo'] || null;
        this.label = options['label'] || null;
        this.size = options['size'] || 'md';
    }
    }
}
