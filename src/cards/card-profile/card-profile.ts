import { Action } from './../../action';
import { CardBase } from './../card-base';
export class CardProfile extends CardBase {
    public bg?: string;
    public avatar?: string;
    public fab?: Action[];
    public stats?: any;
    constructor(
        options: {} = {}
    ) {
        super(options);
        this.bg = options['bg'] || null;
        this.avatar = options['avatar'] || null;
        this.fab = options['fab'] || null;
        this.stats = options['stats'] || null;
    }
}
