export class Header {
    public title?: string;
    public subtitle?: string;
    public msg?: string;
    public bg?: string;
    public customClass?: string;
    public parallax?: boolean;
    public contentAlign?: boolean;
    constructor(
        options: {
            title?: string,
            subtitle?: string,
            msg?: string,
            bg?: string,
            customClass?: string,
            parallax?: boolean,
            contentAlign?: boolean;
         }
     ) {
        this.title = options.title;
        this.subtitle = options.subtitle;
        this.msg = options.msg;
        this.bg = options.bg;
        this.customClass = options.customClass;
        this.parallax = options.parallax;
        this.contentAlign = options.contentAlign;

     }
}
