import {
    Component,
    Input
} from '@angular/core';
import { Action } from '../../action';
@Component({
    selector: 'as-card-image',
    templateUrl: 'card-image.component.html'
})
export class CardImageComponent {
    @Input('img') public img: string;
    @Input('title') public title: string;
    @Input('orientation') public orientation;
    @Input('subtitle') public subtitle: string;
    @Input('customClass') public customClass: string;
    @Input('msg') public msg: string;
    @Input('fab') public fab: Action;
    @Input('optionsLeft') public optionsLeft: Action[];
    @Input('optionsRight') public optionsRight: any;
    @Input('shadow') public shadow: string;
    @Input('actions') public actions: Action[];
    @Input('footer') public footer: any = {
        justify: 'flex-end',
        alignment: 'center'
    };
}
