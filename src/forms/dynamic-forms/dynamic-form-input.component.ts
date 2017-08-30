
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { InputBase } from '../input-base';
import { Validation } from './../../validation';

@Component({
  selector: 'as-df-input',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: [
    './dynamic-form.component.scss'
  ]
})
export class DynamicFormInputComponent implements OnInit {
  @Input() public input: InputBase<any>;
  @Input() public form: FormGroup;
  @Input() public style: string;
  @Input() public submitted: boolean = false;
  public formControl: any;
  public key: any;
  public validations: Validation[];
  public errors: any;
  /**
   * ngOnInit
   */
  public ngOnInit() {
    this.formControl = this.form.controls;
    this.key = this.input.key;
    this.validations = this.input.validations || [];
    this.errors = this.formControl[this.key].errors || null;
  }
  public isValid() { return this.form.controls[this.input.key].valid; }
  public isPristine() { return this.form.controls[this.input.key].pristine; }
  public isValidInput(key) {
    return this.form.controls[key].valid && this.form.controls[key].pristine;
  }
}
