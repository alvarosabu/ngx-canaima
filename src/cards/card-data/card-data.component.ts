import {
    Component,
    OnInit,
    Input,
} from '@angular/core';
import { Action } from './../../action';
@Component({
    selector: 'as-card-data',
    templateUrl: 'card-data.component.html'
})
export class CardDataComponent implements OnInit {
    @Input('img') public img: string;
    @Input('icon') public icon: string;
    @Input('prefix') public prefix = 'mdi';
    @Input('title') public title: string;
    @Input('subtitle') public subtitle: string;
    @Input('actions') public actions: Action[];
    @Input('shadow') public shadow: [any];
    @Input('customClass') public customClass: string;
    public hover: boolean;

    public ngOnInit() {
        this.hover = false;
    }
    /**
     * actionCallback
     */
    public actionCallback(action: Action) {
        action.active = !action.active;
        action.callback()
    }
}
