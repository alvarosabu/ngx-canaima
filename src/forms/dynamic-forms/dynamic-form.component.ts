
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputBase } from '../input-base';
import { InputControlService } from '../input-control.service';
import { Action } from './../../action';

@Component({
  selector: 'as-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: [
    
  ]
})
export class DynamicFormComponent implements OnInit {

  @Input('inputs') public inputs: Array<InputBase<any>> = [];
  @Input('style') public style = 'default';
  @Input('reset') public reset = false;
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
      if (this.reset) {
        this.form.reset();
      }
      this.submitted = false;
    }
  }
}
