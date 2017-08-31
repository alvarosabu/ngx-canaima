
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputBase } from '../input-base';
import { Validation } from './../../validation';

@Component({
  selector: 'as-df-select',
  templateUrl: './dynamic-form-select.component.html',
  styleUrls: [
    './dynamic-form.component.scss'
  ]
})
export class DynamicFormSelectComponent implements OnInit {
  @Input() public input: InputBase<any>;
  @Input() public form: FormGroup;
  @Input() public style: string;
  @Input() public submitted = false;
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
    this.formControl[this.key].valueChanges.subscribe((value) => {
      // called when the value is updated
      this.errors = this.formControl[this.key].errors || null;
    });
  }
  public isValid() { return this.form.controls[this.input.key].valid; }
  public isPristine() { return this.form.controls[this.input.key].pristine; }
  public isValidInput(key) {
    return this.form.controls[key].valid && this.form.controls[key].pristine;
  }
}
