export class Action {
    public label?: string;
    public callback?: any;
    public icon?: string;
    public iconActive?: string;
    public value?: boolean;
    public size?: string;
    public prefix?: string;
    public customClass?: string;
    public color?: string;
    public outline?: boolean;
    public rounded?: boolean;
    public circle?: boolean;
    public anchor?: boolean;
    public link?: string;
    constructor(
        options: {
            label?: string;
            callback?: any;
            icon?: string;
            iconActive?: string;
            value?: boolean;
            size?: string;
            prefix?: string;
            customClass?: string;
            color?: string;
            outline?: boolean;
            rounded?: boolean;
            circle?: boolean;
            anchor?: boolean;
            link?: string;
        }
    ) {
        this.label = options.label;
        this.icon = options.icon;
        this.iconActive = options.iconActive;
        this.prefix = options.prefix || 'mdi';
        this.customClass = options.customClass;
        this.callback = options.callback;
        this.size = options.size;
        this.value = options.value;
        this.color = options.color || 'plain';
        this.outline = options.outline;
        this.rounded = options.rounded;
        this.circle = options.circle;
        this.anchor = options.anchor;
        this.link = options.link;
    }
}
