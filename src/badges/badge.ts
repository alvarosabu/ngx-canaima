export class Badge {
    public icon?: string;
    public prefix?: string;
    public size?: string;
    public badge?: string;
    public badgeIcon?: string;
    public customClass?: string;
    public count?: any;
    public position?: any;
    public color?: string;
    public outline?: boolean;
    public rounded?: boolean;
    constructor(
        options: {
            icon?: string,
            prefix?: string;
            size?: string,
            badge?: string,
            badgeIcon?: string,
            customClass?: string,
            count?: any,
            position?: any,
            color?: string,
            outline?: boolean,
            rounded?: boolean
        }
    ) {
        this.icon = options.icon;
        this.prefix = options.prefix || 'mdi';
        this.size = options.size;
        this.badge = options.badge;
        this.badgeIcon = options.badgeIcon;
        this.customClass = options.customClass;
        this.count = options.count;
        this.position = options.position;
        this.color = options.color || 'plain';
        this.outline = options.outline || false;
        this.rounded = options.rounded || false;
    }
}
