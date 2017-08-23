import {
    Component,
    Input,
} from '@angular/core';
import { Action } from './../../action';
@Component({
    selector: 'as-card-bg',
    templateUrl: 'card-bg.component.html'
})
export class CardBgComponent {
    @Input('bg') public bg: string;
    @Input('title') public title: string;
    @Input('subtitle') public subtitle: string;
    @Input('customClass') public customClass: string;
    @Input('optionsLeft') public optionsLeft: Action[];
    @Input('optionsRight') public optionsRight: any;
    @Input('actions') public actions: Action[];
    @Input('footer') public footer: any;
    @Input('shadow') public shadow: string;
}
