export class Segment {
    public label?: string;
    public value?: string;
    public prefix?: string;
    public icon?: string;
    public active?: boolean;
    public disabled?: boolean;
    public removable?: boolean;
    public customClass?: string;
    constructor(
        options: {
            label?: string,
            value?: string;
            prefix?: string,
            icon?: string,
            active?: boolean,
            disabled?: boolean,
            removable?: boolean,
            customClass?: string
        }
    ) {
        this.label = options.label;
        this.value = options.value;
        this.prefix = options.prefix || 'mdi';
        this.icon = options.icon || null;
        this.active = options.active;
        this.disabled = options.disabled || false;
        this.removable = options.removable || false;
        this.customClass = options.customClass;
    }
}
