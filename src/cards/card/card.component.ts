import {
    Component,
    Input,
} from '@angular/core';
import { Action } from './../../action';
@Component({
    selector: 'as-card',
    templateUrl: 'card.component.html'
})
export class CardComponent {
    public _actions = [];
    @Input('title') public title: string;
    @Input('subtitle') public subtitle: string;
    @Input('customClass') public customClass: string;
    @Input('msg') public msg: string;
    @Input('optionsLeft') public optionsLeft: any[];
    @Input('optionsRight') public optionsRight: any[];
    @Input('actions') public actions: Action[];
    @Input('shadow') public shadow: [any];

}