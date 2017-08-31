export declare class Action {
    label: string;
    callback: any;
    icon: string;
    iconActive: string;
    value: boolean;
    size: string;
    prefix: string;
    customClass: string;
    constructor(label?: any, callback?: () => void, icon?: any, iconActive?: any, value?: boolean, customClass?: string, prefix?: string, size?: string);
}
