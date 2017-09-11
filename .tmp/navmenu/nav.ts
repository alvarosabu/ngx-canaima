export class Nav {
     public _id?: string;
     public title?: string;
     public slugName?: string;
     public prefix?: string;
     public icon?: string;
     public open?: boolean;
     public sub?: boolean;
     public subitems?: (any | Nav)[];
     public badge?: any;
     constructor(
        options: {
            _id?: string,
            title?: string,
            slugName?: string,
            prefix?: string;
            icon?: string,
            open?: boolean,
            sub?: boolean,
            subitems?: (any | Nav)[],
            badge?: any
         }
     ) {
        this._id = options._id;
        this.title = options.title;
        this.slugName = options.slugName;
        this.prefix = options.prefix;
        this.icon = options.icon;
        this.open = options.open;
        this.sub = options.sub;
        this.subitems = options.subitems;
        this.badge = options.badge;
     }
}
