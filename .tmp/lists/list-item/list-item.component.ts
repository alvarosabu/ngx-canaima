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
    selector: 'as-list-item',
    template: "<div  class=\"list-item {{customClass}}\" [ngClass]=\"{'list-item--line': hasLine}\"> <div class=\"list-item__content\"> <h5  class=\"list-item__title\" *ngIf=\"title\">{{title}}</h5> <span  class=\"list-item__subtitle\"  *ngIf=\"subtitle\">{{subtitle}}</span> </div> <div class=\"list-item__side\"> <div class=\"list-item__actions\" [hidden]=\"actions?.length === 0\"> <i  class=\"{{action.prefix}} {{action.prefix}}-{{action.value ? action.iconActive : action.icon}}\" [ngStyle]=\"{'font-size': action.size + 'px'}\" (click)=\"action.callback(); action.value = ! action.value\"  *ngFor=\"let action of actions\" ></i> </div> </div> </div>"
})
export class ListItemComponent {
    @Input('index') public index: string;
    @Input('title') public title: string;
    @Input('subtitle') public subtitle: string;
    @Input('hasLine') public hasLine: boolean;
    @Input('actions') public actions: [Action];
    @Input('customClass') public customClass: string;
    @Output() public onSelected = new EventEmitter<any>();
    public isChecked = false;
    /**
     * select
     */
    public select() {
        this.onSelected.emit(this.index);
        this.isChecked = !this.isChecked;
    }
}
