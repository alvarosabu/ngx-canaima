import {
    Component,
    Input,

} from '@angular/core';
import { Action } from './../../action';
@Component({
    selector: 'as-card-profile',
    templateUrl: 'card-profile.component.html',

})
export class CardProfileComponent {
    @Input('bg') public bg: string;
    @Input('avatar') public avatar: string;
    @Input('title') public title: string;
    @Input('subtitle') public subtitle: string;
    @Input('msg') public msg: string;
    @Input('fab') public fab: any;
    @Input('stats') public stats: [any];
    @Input('customClass') public customClass: string;
    @Input('shadow') public shadow: string;
    @Input('optionsLeft') public optionsLeft: Action[];
    @Input('optionsRight') public optionsRight: any[];
    @Input('actions') public actions: Action[];
    @Input('footer') public footer: any = {
        justify: 'flex-end',
        alignment: 'center'
    };
}