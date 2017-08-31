import { Validation } from './../validation';
export declare class InputBase<T> {
    value: T;
    key: string;
    label: string;
    validations: Validation[];
    order: number;
    controlType: string;
    customClass: string;
    constructor(options?: {
        value?: T;
        key?: string;
        label?: string;
        validations?: Validation[];
        order?: number;
        controlType?: string;
        customClass?: string;
    });
}
