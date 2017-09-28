import {
    Component,
    OnInit,
    Input,
    ViewEncapsulation
} from '@angular/core';
import { Action } from './../action';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'as-empty-state',
    templateUrl: 'empty-state.component.html'
})
export class EmptyStateComponent implements OnInit {
    @Input('img') public img: string;
    @Input('title') public title: string;
    @Input('msg') public msg: string;
    @Input('actions') public actions: Action[];
    @Input('footer') public footer: any = {
        justify: 'flex-end',
        alignment: 'center'
    };
    constructor() { }

    public ngOnInit() { }
}