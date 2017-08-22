import {
    Component,
    Input,
} from '@angular/core';

@Component({
    selector: 'as-card',
    templateUrl: 'card.component.html',
    styleUrls: [
        '../cards.scss'
    ]
})
export class CardComponent {
    public _actions = [];
    @Input('title') public title: string;
    @Input('subtitle') public subtitle: string;
    @Input('customClass') public customClass: string;
    @Input('msg') public msg: string;
    @Input('optionsLeft') public optionsLeft: any[];
    @Input('optionsRight') public optionsRight: any[];
    @Input('actions') public actions: any[];
    @Input('shadow') public shadow: [any];

}