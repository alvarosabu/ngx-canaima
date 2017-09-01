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
    selector: 'as-list-item-property',
    templateUrl: 'list-item-property.component.html',
})
export class ListItemPropertyComponent {
    @Input('index') public index: string;
    @Input('key') public key: string;
    @Input('value') public value: string;
    @Input('hasLine') public hasLine: boolean;
    @Input('least') public least: string;
    @Input('actions') public actions: [Action];
    @Input('customClass') public customClass: string;

}