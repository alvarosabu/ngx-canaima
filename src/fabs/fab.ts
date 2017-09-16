import { Action } from './../action';
export class Fab {
    public callback?: any;
    public icon?: string;
    public iconActive?: string;
    public position?: string;
    public size?: string;
    public prefix?: string;
    public customClass?: string;
    public color?: string;
    public outline?: boolean;
    public menu?: Action[];
    public type?: string;
    constructor(
        options: {
            callback?: any,
            icon?: string,
            iconActive?: string,
            position?: string,
            size?: string,
            prefix?: string,
            customClass?: string,
            color?: string,
            outline?: boolean,
            menu?: Action[];
            type?: string;
        }
    ) {
        this.icon = options.icon;
        this.iconActive = options.iconActive || options.icon;
        this.position = options.position || 'bottom right'
        this.prefix = options.prefix || 'mdi';
        this.customClass = options.customClass;
        this.callback = options.callback;
        this.size = options.size || 'md';
        this.color = options.color || 'plain';
        this.outline = options.outline;
        this.menu = options.menu;
        this.type = options.type;
    }
}

/*
label = null,
        callback = () => {
            console.log('Simple action');
        },
        icon = null,
        iconActive= null,
        value= false,
        customClass = null,
        prefix = 'mdi',
        size = 'md',
        color = 'link',
        outline?: boolean,
        rounded?: boolean
*/