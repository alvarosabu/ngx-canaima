
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputBase } from '../input-base';
import { InputControlService } from '../input-control.service';
import { Action } from './../../action';

@Component({
  selector: 'as-dynamic-form',
  template: "<div> <form class=\"frow\" (ngSubmit)=\"submit()\" [formGroup]=\"form\"> <div  class=\"form-group {{input.customClass}}\" *ngFor=\"let input of inputs\" [ngSwitch]=\"input.controlType\" > <as-df-input *ngSwitchCase=\" 'textbox'\" [input]=\"input\" [form]=\"form\" [submitted]=\"submitted\" [style]=\"style\"></as-df-input> <as-df-select *ngSwitchCase=\"'dropdown'\" [input]=\"input\" [form]=\"form\" [submitted]=\"submitted\" [style]=\"style\"></as-df-select> <as-df-checkbox *ngSwitchCase=\"'checkbox'\" [input]=\"input\" [form]=\"form\" [submitted]=\"submitted\" [style]=\"style\"></as-df-checkbox> <as-df-radio *ngSwitchCase=\"'radio'\" [input]=\"input\" [form]=\"form\" [submitted]=\"submitted\" [style]=\"style\"></as-df-radio> <as-df-textarea *ngSwitchCase=\" 'textareabox'\" [input]=\"input\" [form]=\"form\" [submitted]=\"submitted\" [style]=\"style\"></as-df-textarea> </div> <div class=\"form-group form-footer\" [ngStyle]=\"{'justify-content': footer?.justify}\"> <div *ngFor=\"let action of actions\"> <div *ngIf=\"!action.value\" class=\"btn btn-primary {{action.customClass}}\" > {{action.label}} </div> <button class=\"btn btn-primary\" *ngIf=\"action.value\" type=\"submit\" > {{action.label}} </button> </div> </div> </form> <!-- <div *ngIf=\"payLoad\" class=\"form-row\"> <strong>Saved the following values</strong><br>{{payLoad}} </div> --> </div> ",
  styles: []
})
export class DynamicFormComponent implements OnInit {

  @Input('inputs') public inputs: Array<InputBase<any>> = [];
  @Input('style') public style = 'default';
  @Input('actions') public actions: Action[] = [];
  @Input('footer') public footer: any = {
    justify: 'flex-end',
    alignment: 'center'
  };
  @Output() public onSubmit = new EventEmitter();
  // Default, Float, Icon
  public form: FormGroup;
  public payLoad = '';
  public submitted = false;
  constructor(private ics: InputControlService) {  }

  public ngOnInit() {
    this.form = this.ics.toFormGroup(this.inputs);
    this.form.valueChanges.subscribe((value) => {
      // called when the value is updated
      console.log(value);
    });
  }

  public submit() {
    this.submitted = true;
    if (this.form.valid) {

      this.onSubmit.emit(this.form.value);
      this.form.reset();
      this.submitted = false;
    }
  }
}
