
export class Validation {
    public type?: string;
    public value?: any;
    public msg?: string;
    constructor(
        type?: string,
        value?: any,
        msg?: string
    ) {
        this.type = type;
        this.value = value;
        this.msg = msg;
    }
}
