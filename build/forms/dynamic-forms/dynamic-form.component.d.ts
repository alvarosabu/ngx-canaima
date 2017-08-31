import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputBase } from '../input-base';
import { InputControlService } from '../input-control.service';
import { Action } from './../../action';
export declare class DynamicFormComponent implements OnInit {
    private ics;
    inputs: Array<InputBase<any>>;
    style: string;
    actions: Action[];
    footer: any;
    onSubmit: EventEmitter<{}>;
    form: FormGroup;
    payLoad: string;
    submitted: boolean;
    constructor(ics: InputControlService);
    ngOnInit(): void;
    submit(): void;
}
