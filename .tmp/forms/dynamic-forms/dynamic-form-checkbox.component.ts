
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputBase } from '../input-base';
import { Validation } from './../../validation';

@Component({
  selector: 'as-df-checkbox',
  template: "<div  [formGroup]=\"form\"> <div class=\"flex-group\" [ngClass]=\"{ 'has-error': submitted && !isValid(), 'has-success': isValid() && !isPristine() && submitted }\"> <!-- <label class=\"float-label\" *ngIf=\"style != 'float'\" [attr.for]=\"input.key\">{{input.label}}</label> --> <input class=\"form-control\" [placeholder]=\"' '\" [formControlName]=\"input.key\" (change)=\"input.value = $event.target.checked\"  [(ngModel)]=\"input.value\"  [attr.checked]=\"input.value ? true : null\"  [id]=\"input.key\" [type]=\"input.type\"> <label [attr.for]=\"input.key\">{{input.label}}</label> <div class=\"help-block\"  *ngFor=\"let val of validations\"> <span *ngIf=\"errors && errors[val.type] && submitted\">{{val.msg}}</span> </div> </div> </div> ",
  styles: []
})
export class DynamicFormCheckboxComponent implements OnInit {
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

