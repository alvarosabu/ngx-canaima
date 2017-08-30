import { Validation } from './../../../../src/validation';

import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { Action } from './../../../../src/action';

import { InputBase } from './../../../../src/forms/input-base';
import { TextInput } from './../../../../src/forms/text-input';
import { SelectInput } from './../../../../src/forms/select-input';
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
        new SelectInput({
            key: 'brave',
            label: 'Bravery Rating',
            options: [
              {key: 'solid',  value: 'Solid'},
              {key: 'great',  value: 'Great'},
              {key: 'good',   value: 'Good'},
              {key: 'unproven', value: 'Unproven'}
            ],
            order: 3
        }),
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
}