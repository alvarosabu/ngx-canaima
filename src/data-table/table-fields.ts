export class TableField {
    public key?: string;
    public alias?: string;
    public type?: string;
    public basis?: number;
    public ordenable?: boolean;
    public signColored?: boolean;
    public unit?: string;
    public pipe?: string;
    public format?: string;
    public responsive?: boolean;
    public customClass?: string;
    constructor(
        options: {
            key?: string;
            alias?: string;
            type?: string;
            basis?: number;
            ordenable?: boolean;
            signColored?: boolean;
            unit?: string;
            pipe?: string;
            format?: string;
            responsive?: boolean;
            customClass?: string;
        }
    ) {
        this.key = options.key;
        this.alias = options.alias;
        this.type = options.type;
        this.basis = options.basis;
        this.ordenable = options.ordenable;
        this.signColored = options.signColored;
        this.unit = options.unit;
        this.pipe = options.pipe;
        this.format = options.format;
        this.responsive = options.responsive || false;
        this.customClass = options.customClass;
    }
}
