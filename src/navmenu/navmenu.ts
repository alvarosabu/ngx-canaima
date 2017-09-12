import { Nav } from './nav';
export class Navmenu {
    public navs?: Nav[];
    public open?: boolean;
    public collapsable?: boolean;
    public showIcons?: boolean;
    public customClass?: string;
    public shadow?: string;
    constructor(
        options: {
            navs?: Nav[],
            open?: boolean,
            collapsable?: boolean,
            showIcons?: boolean,
            customClass?: string,
            shadow?: string
        }
    ) {
        this.navs = options.navs;
        this.open = options.open;
        this.collapsable = options.collapsable;
        this.showIcons = options.showIcons;
        this.customClass = options.customClass;
        this.shadow = options.shadow;
    }
}
