
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputBase } from '../input-base';
import { Validation } from './../../validation';

@Component({
  selector: 'as-df-radio',
  template: "<div  [formGroup]=\"form\"> <div class=\"flex-group radio-group\" [ngClass]=\"{ 'has-error': submitted && !isValid(), 'has-success': isValid() && !isPristine() && submitted }\"> <label class=\"float-label\" [attr.for]=\"input.key\">{{input.label}}</label> <br> <label  class=\"radio-inline\"  *ngFor=\"let opt of input.options\"> <input  class=\"form-control\" [formControlName]=\"input.key\"  [(ngModel)]=\"input.value\"  [name]=\"input.value\" (change)=\"input.value = opt.value\" [attr.checked]=\"input.value == opt.value ? true : null\"  [type]=\"input.type\"  [id]=\"input.key\" [value]=\"opt.value\"> <span>{{opt.value}}</span> </label> <div class=\"help-block\"  *ngFor=\"let val of validations\"> <span *ngIf=\"errors && errors[val.type] && submitted\">{{val.msg}}</span> </div> </div> </div> ",
  styles: []
})
export class DynamicFormRadioComponent implements OnInit {
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

