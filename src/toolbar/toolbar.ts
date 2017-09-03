import { ActionDropdown } from './../action-dropdown';
import { Action } from './../action';
export class Toolbar {
    public brand?: any;
    public slugName?: string;
    public title?: string;
    public customClass?: string;
    public actions?: (Action | ActionDropdown)[];
    public fixed?: boolean;
    constructor(
       options: {
           brand?: any,
           slugName?: string,
           title?: string;
           customClass?: string,
           actions?: (Action | ActionDropdown)[],
           fixed?: boolean
        }
    ) {
       this.brand = options.brand;
       this.slugName = options.slugName;
       this.title = options.title;
       this.customClass = options.customClass;
       this.actions = options.actions;
       this.fixed = options.fixed;
    }
}
