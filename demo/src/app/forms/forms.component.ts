

import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { Action } from './../../../../src/action';
import { Validation } from './../../../../src/validation';
import { InputBase } from './../../../../src/forms/input-base';
import { TextInput } from './../../../../src/forms/text-input';
import { SelectInput } from './../../../../src/forms/select-input';
import { CheckboxInput } from '../../../../src/forms/checkbox-input';
import { RadioInput } from '../../../../src/forms/radio-input';
@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'forms',
    templateUrl: 'forms.component.html',
    styleUrls: [
        './forms.component.scss'
    ]
})
export class FormsComponent implements OnInit {
    public navBar: any = {
        brand: {
            logo: '/assets/img/ngx-canaima.png'
        }
    };
    public inputs: Array<InputBase<any>>  = [
        new TextInput({
          key: 'username',
          label: 'Username',
          type: 'text',
          validations: [
            new Validation('required', true, 'Username is required')
        ],
          order: 1,
          customClass: 'fcol-xs-12 fcol-md-6'
        }),
        new TextInput({
          key: 'password',
          label: 'Password',
          type: 'password',
          validations: [
            // tslint:disable-next-line:max-line-length
            new Validation('pattern', '(?=.*)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!$%@#£€*?Ññ.<>?;:\'`!%^*(){}_+=|-]{8,}', 'Password format is incorrect')
          ],
          order: 2,
          customClass: 'fcol-xs-12 fcol-md-6'
        }),
        new TextInput({
            key: 'email',
            label: 'Email',
            type: 'email',
            validations: [
                new Validation('required', true, 'Email is required'),
                new Validation('email', true, 'Email format is incorrect')
            ],
            order: 3,
            customClass: 'fcol-xs-12 fcol-md-6'
        }),
        new TextInput({
            key: 'ip',
            label: 'IP',
            type: 'text',
            validations: [
              new Validation('required', true, 'IP is required')
          ],
            order: 4,
            customClass: 'fcol-xs-12 fcol-md-6'
        }),
        new TextInput({
            key: 'age',
            label: 'Age',
            type: 'number',
            validations: [
                /* new Validation('min', 1, 'Min Age'),
                new Validation('max', 90, 'Max Age') */
          ],
            order: 5,
            customClass: 'fcol-xs-12 fcol-md-6'
        }),
        new CheckboxInput({
            key: 'terms',
            label: 'Terms and Conditions',
            type: 'checkbox',
            validations: [
                /* new Validation('min', 1, 'Min Age'),
                new Validation('max', 90, 'Max Age') */
          ],
            order: 6,
            customClass: 'fcol-xs-12 fcol-md-6'
        }),
        new RadioInput({
            key: 'gender',
            label: 'Gender',
            type: 'radio',
            options: [
              {key: 'male',  value: 'Male'},
              {key: 'female',  value: 'Female'},
            ],
            order: 7
        }),
        new SelectInput({
            key: 'brave',
            label: 'Bravery Rating',
            options: [
              {key: 'solid',  value: 'Solid'},
              {key: 'great',  value: 'Great'},
              {key: 'good',   value: 'Good'},
              {key: 'unproven', value: 'Unproven'}
            ],
            order: 8
        })
      ];
    public normalForm: any = {
        actions: [
        new Action('Cancel', null, null, null, false),
        new Action('Login', null, null, null, true, 'btn-primary')
        ]
    };
    constructor() { }

    public ngOnInit() { }

    /**
     * submitForm
     */
    public submitForm(e) {
        console.log('Submitted', e);
    }
};