export class TableField {
    public key?: string;
    public alias?: string;
    public basis?: number;
    public ordenable?: boolean;
    public unit?: string;
    public pipe?: string;
    public format?: string;
    public customClass?: string;
    constructor(
        options: {
            key?: string;
            alias?: string;
            basis?: number;
            ordenable?: boolean;
            unit?: string;
            pipe?: string;
            format?: string;
            customClass?: string;
        }
    ) {
        this.key = options.key;
        this.alias = options.alias;
        this.basis = options.basis;
        this.ordenable = options.ordenable;
        this.unit = options.unit;
        this.pipe = options.pipe;
        this.format = options.format;
        this.customClass = options.customClass;
    }
}
