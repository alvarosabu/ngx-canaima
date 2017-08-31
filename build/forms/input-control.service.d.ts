import { FormGroup } from '@angular/forms';
import { InputBase } from './input-base';
export declare class InputControlService {
    constructor();
    toFormGroup(inputs: Array<InputBase<any>>): FormGroup;
}
