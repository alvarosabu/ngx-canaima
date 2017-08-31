import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputBase } from '../input-base';
import { Validation } from './../../validation';
export declare class DynamicFormInputComponent implements OnInit {
    input: InputBase<any>;
    form: FormGroup;
    style: string;
    submitted: boolean;
    formControl: any;
    key: any;
    validations: Validation[];
    errors: any;
    /**
     * ngOnInit
     */
    ngOnInit(): void;
    isValid(): boolean;
    isPristine(): boolean;
    isValidInput(key: any): boolean;
}
