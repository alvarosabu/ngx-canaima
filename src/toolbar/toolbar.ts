export class Toolbar {
    public brand?: any;
    public slugName?: string;
    public title?: string;
    public customClass?: string;
    public fixed?: boolean;
    constructor(
       options: {
           brand?: any,
           slugName?: string,
           title?: string;
           customClass?: string,
           fixed?: boolean
        }
    ) {
       this.brand = options.brand;
       this.slugName = options.slugName;
       this.title = options.title;
       this.customClass = options.customClass;
       this.fixed = options.fixed;
    }
}
