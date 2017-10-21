export class Toggle {
    public id?: number | string;
    public img?: string;
    public prefix?: string;
    public icon?: string;
    public content?: string;
    public delete?: boolean;
    public customClass?: string;
    public shadow?: string;
    constructor(options: {
        id?: number | string,
        img?: string,
        prefix?: string,
        icon?: string,
        content?: string,
        delete?: boolean,
        customClass?: string,
        shadow?: string
    }) {
        this.id = options.id;
        this.img = options.img;
        this.prefix = options.prefix || 'mdi';
        this.icon = options.icon;
        this.content = options.content;
        this.delete = options.delete;
        this.customClass = options.customClass;
        this.shadow = options.shadow;
    }
}
