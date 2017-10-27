
import {
    Component,
    OnInit,
    OnChanges,
    Input,
    Output,
    EventEmitter,
    ViewChild
} from '@angular/core';
import { Action } from './../../action';
@Component({
    selector: 'as-card-number',
    templateUrl: 'card-number.component.html'
})
export class CardNumberComponent {
    @Input('title') public title: string;
    @Input('subtitle') public subtitle: string;
    @Input('value') public value: string;
    @Input('siPrefix') public siPrefix: string;
    @Input('label') public label: string;
    @Input('size') public size = 'md';
    @Input('pipe') public pipe: string;
    @Input('optionsLeft') public optionsLeft: Action[];
    @Input('optionsRight') public optionsRight: Action[];
    @Input('actions') public actions: Action[];
    @Input('fab') public fab: any[];
    @Input('countTo') public countTo: any[];
    @Input('height') public height: any[];
    @Input('customClass') public customClass: string;
    @Input('shadow') public shadow: string;
    @Input('footer') public footer: any = {
        justify: 'flex-end',
        alignment: 'center'
    };
    /**
     * actionCallback
     */
    public actionCallback(action: Action) {
        action.active = !action.active;
        action.callback()
    }
}
