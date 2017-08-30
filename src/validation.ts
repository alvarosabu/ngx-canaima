
export class Validation {
    public type?: string;
    public value?: boolean;
    public msg?: string;
    constructor(
        type?: string,
        value?: boolean,
        msg?: string
    ) {
        this.type = type;
        this.value = value;
        this.msg = msg;
    }
}
