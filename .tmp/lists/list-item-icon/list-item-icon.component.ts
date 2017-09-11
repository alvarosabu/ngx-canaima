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
    template: "<div  class=\"list-item list-item--icon  {{customClass}}\" [ngClass]=\"{'list-item--line': hasLine}\"> <div class=\"list-item__thumb\" *ngIf=\"icon\"> <i class=\"{{prefix}} {{prefix}}-{{icon}}\"></i> </div> <div class=\"list-item__content\"> <h5 class=\"list-item__title\" *ngIf=\"title\">{{title}}</h5> <span class=\"list-item__subtitle\" *ngIf=\"subtitle\">{{subtitle}}</span> </div> <div class=\"list-item__side\"> <span  class=\"list-item__least\"  *ngIf=\"least\"> {{least}} </span> <div  class=\"list-item__actions\" *ngIf=\"actions\"> <i class=\"{{action.prefix}} {{action.prefix}}-{{action.value ? action.iconActive : action.icon}}\" [ngStyle]=\"{'font-size': action.size + 'px'}\" (click)=\"action.callback(); action.value = ! action.value\" *ngFor=\"let action of actions\" ></i> </div> </div> </div>"
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
