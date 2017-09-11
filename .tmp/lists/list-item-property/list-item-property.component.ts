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
    template: "<div  class=\"list-item list-item--property {{customClass}}\"  [ngClass]=\"{'list-item--line': hasLine}\"> <div  class=\"list-item__key\" *ngIf=\"key\"> {{key}} </div> <div  class=\"list-item__value\" *ngIf=\"value\"> {{value}} </div> <div class=\"list-item__side\" *ngIf=\"least || actions\"> <span class=\"list-item__least\"  *ngIf=\"least\">{{least}}</span> <div  class=\"list-item__actions\" *ngIf=\"actions\"> <i class=\"{{action.prefix}} {{action.prefix}}-{{action.value ? action.iconActive : action.icon}}\" [ngStyle]=\"{'font-size': action.size + 'px'}\" (click)=\"action.callback(); action.value = ! action.value\" *ngFor=\"let action of actions\" ></i> </div> </div> </div>",
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