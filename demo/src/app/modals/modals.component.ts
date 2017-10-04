import { TextAreaInput } from './../../../../src/forms/textarea-input';
import { RadioInput } from './../../../../src/forms/radio-input';
import { CheckboxInput } from './../../../../src/forms/checkbox-input';
import { Validation } from './../../../../src/validation';
import { TextInput } from './../../../../src/forms/text-input';
import { InputBase } from './../../../../src/forms/input-base';
import { Action } from './../../../../src/action';
import { ActivatedRoute } from '@angular/router';
import { Toolbar } from './../../../../src/toolbar/toolbar';
import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { Modal } from './../../../../src/modals/modal';
import { SelectInput } from '../../../../src/index';
@Component({
    selector: 'modals',
    templateUrl: 'modals.component.html',
    styleUrls: [
        './modals.component.scss'
    ]
})
export class ModalsComponent implements OnInit {
    public navBar: any = {
        brand: {
            logo: '/assets/svg/ngx-canaima.svg'
        },
        title: this.route.snapshot.data['title']
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
            order: 7,
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
            order: 8,
            customClass: 'fcol-xs-12 fcol-md-6'
        }),
        new TextAreaInput({
            key: 'about',
            label: 'About',
            type: 'textarea',
            validations: [
                new Validation('required', true, 'About is required')
                /* new Validation('min', 1, 'Min Age'),
                new Validation('max', 90, 'Max Age') */
            ],
            order: 9,
            customClass: 'fcol-xs-12'
        }),
      ];
    public normalForm: any = {
        actions: [
        new Action(
            {
                label: 'Cancel'
            }
        ),
        new Action(
            {
                label: 'Save',
                color: 'primary'
            }
        ),
        ]
    };
    public smallModal: Modal = new Modal(
        {
            title: 'Small Modal',
            open: false,
            size: 'sm',
            msg: 'Hi I\'m a little small little bitch modal',
            onClosed: ($e) => {
                console.log('Small Modal closed');
            }
        }
    );
    public mediumModal: Modal = new Modal(
        {
            title: 'Medium Modal',
            open: false,
            size: 'md',
            msg: 'Hi I\'m a medium bacon modal',
            onClosed: ($e) => {
                console.log('Medium Modal closed');
            }
        }
    );
    public largeModal: Modal = new Modal(
        {
            title: 'Large Modal',
            open: false,
            size: 'lg',
            msg: 'Hi I\'m a large bacon modal',
            onClosed: ($e) => {
                console.log('Large Modal closed');
            }
        }
    );
    public actionModal: Modal = new Modal(
        {
            title: 'Action Modal',
            open: false,
            size: 'md',
            msg: 'Hi I\'m a large bacon modal',
            onClosed: ($e) => {
                console.log('Large Modal closed');
            },
            actions: [
                new Action({
                    label: 'Action 1',
                    color: 'primary',
                    callback: () => {
                        console.log('Action 1');
                    }
                }),
                new Action({
                    label: 'Action 2',
                    color: 'primary',
                    callback: () => {
                        console.log('Action 1');
                    }
                })
            ]
        }
    );
    public confirmModal: Modal = new Modal(
        {
            img: '../assets/svg/checked.svg',
            open: false,
            size: 'sm',
            msg: 'Are you sure you wanna Shuffle?',
            actions: [
                new Action({
                    label: 'Cancel',
                    color: 'link',
                    callback: () => {
                        console.log('Action 1');
                    }
                }),
                new Action({
                    label: 'Confirm',
                    color: 'primary',
                    callback: () => {
                        console.log('Action 1');
                    }
                }),
            ]
        }
    );
    public errorModal: Modal = new Modal(
        {
            img: '../assets/svg/cancel.svg',
            open: false,
            size: 'sm',
            msg: 'Are you sure you wanna Shuffle?',
            actions: [
                new Action({
                    label: 'Cancel',
                    color: 'link',
                    callback: () => {
                        console.log('Action 1');
                    }
                }),
                new Action({
                    label: 'Delete',
                    color: 'danger',
                    callback: () => {
                        console.log('Action 1');
                    }
                }),
            ]
        }
    );
    public contentModal: Modal = new Modal({
        title: 'Content Modal',
        size: 'md',
        open: false
    });
    public formModal: Modal = new Modal({
        title: 'Form Modal',
        size: 'md',
        open: false
    });
    constructor(
        private route: ActivatedRoute,
    ) { }

    public ngOnInit() { }

    /**
     * openModal
     *
     * @param {Modal} modal
     * @memberof ModalsComponent
     */
    public openModal(modal: Modal) {
        modal.open = !modal.open;
    }
    /**
     * submitForm
     */
    public submitForm(e) {
        console.log('Submitted', e);
    }
}
