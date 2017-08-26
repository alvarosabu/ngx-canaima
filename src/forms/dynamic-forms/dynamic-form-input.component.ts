import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputBase } from '../input-base';

@Component({
  selector: 'df-input',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: [
    './dynamic-form.component.scss'
  ]
})
export class DynamicFormInputComponent {
  @Input() public input: InputBase<any>;
  @Input() public form: FormGroup;
  @Input() public style: string;
  @Input() public submitted: boolean = false;
  get isValid() { return this.form.controls[this.input.key].valid; }
  get isPristine() { return this.form.controls[this.input.key].pristine; }
}
