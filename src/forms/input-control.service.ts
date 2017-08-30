import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { InputBase } from './input-base';

@Injectable()
export class InputControlService {
  constructor() { }

  public toFormGroup(inputs: Array<InputBase<any>> ) {
    const group: any = {};
    let validations: any[] = [];
    inputs.forEach((input) => {
      if (input.validations === undefined) {
        group[input.key] = new FormControl(input.value || '');
      }else {
        input.validations.forEach((validation) => {
          let valFormat;
          let type = validation.type;
          if (type === 'pattern') {
            valFormat = Validators.pattern(validation.value);
          }else {
            valFormat = Validators[type];
          }
          console.log('validation', valFormat);
          validations.push(valFormat);
        });
        group[input.key] = new FormControl(input.value || '', validations);
        validations = [];
      }
      /* group[input.key] = control ? new FormControl(input.value || '', Validators.required) : new FormControl(input.value || ''); */
    });
    return new FormGroup(group);
  }
}
