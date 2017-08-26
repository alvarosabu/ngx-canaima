
import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { Action } from './../../../../src/action';
import { TextInput } from './../../../../src/forms/text-input';
import { InputBase } from './../../../../src/forms/input-base';
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
          required: true,
          order: 1
        }),
        new TextInput({
          key: 'password',
          label: 'Password',
          type: 'password',
          required: true,
          order: 2
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
}