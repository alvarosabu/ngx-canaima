import {
    Component,
    Input
} from '@angular/core';
import { Action } from '../../action';
@Component({
    selector: 'as-card-illustration',
    templateUrl: 'card-illustration.component.html'
})
export class CardIllustrationComponent {
    @Input('img') public img: string;
    @Input('title') public title: string;
    @Input('orientation') public orientation;
    @Input('subtitle') public subtitle: string;
    @Input('customClass') public customClass: string;
    @Input('footer') public footer: any = {
        justify: 'flex-end',
        alignment: 'center'
    };
    @Input('msg') public msg: string;
    @Input('fab') public fab: Action;
    @Input('optionsLeft') public optionsLeft: Action[];
    @Input('optionsRight') public optionsRight: any;
    @Input('shadow') public shadow: string;
    @Input('actions') public actions: Action[];
    /**
     * actionCallback
     */
    public actionCallback(action: Action) {
        action.active = !action.active;
        action.callback()
    }
}
