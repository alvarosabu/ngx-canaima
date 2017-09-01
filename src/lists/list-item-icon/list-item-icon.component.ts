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
    selector: 'as-list-item-icon',
    templateUrl: 'list-item-icon.component.html'
})
export class ListItemIconComponent {
    @Input('index') public index: string;
    @Input('title') public title: string;
    @Input('subtitle') public subtitle: string;
    @Input('hasLine') public hasLine: boolean;
    @Input('prefix') public prefix: string;
    @Input('icon') public icon: string;
    @Input('least') public least: string;
    @Input('actions') public actions: [Action];
    @Input('customClass') public customClass: string;
}
