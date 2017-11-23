export class TableFields {
    public key: string;
    public alias: string;
    public ordenable: boolean;
    public unit: string;
    public pipe: string;
    public format: string;
    constructor(
        options: {
            key: string;
            alias: string;
            ordenable: boolean;
            unit: string;
            pipe: string;
            format: string;
        }
    ) {
        this.key = options.key;
        this.alias = options.alias;
        this.ordenable = options.ordenable;
        this.unit = options.unit;
        this.pipe = options.pipe;
        this.format = options.format;
    }
}
