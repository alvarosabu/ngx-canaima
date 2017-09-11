import { Action } from './../../action';
import {
    Component,
    OnInit,
    OnChanges,
    Input,
    Output,
    EventEmitter,
    ViewChild
} from '@angular/core';

@Component({
    selector: 'as-list-item-fileqeue',
    template: "<div  class=\"list-item list-item--avatar {{customClass}}\"  (click)=\"click()\"  [ngClass]=\"{'list-item--line': hasLine}\"> <div class=\"list-item__thumb\"> <div class=\"list-item__filepreview\"> <div class=\"list-item__filesuccess\" *ngIf=\"data.isSuccess\"> <i class=\"mdi mdi-check\"></i> </div> <div bgPreview [image]=\"data._file\" class=\"list-item__img circle\" ></div> </div> </div> <div class=\"list-item__content\"> <h5  class=\"list-item__title\" *ngIf=\"data.file.name\">{{data.file?.name}}</h5> <span class=\"list-item__subtitle\">{{data.file?.size}} MB</span> </div> <div  class=\"list-item__side\" *ngIf=\"least || actions\"> <span class=\"list-item__least\" *ngIf=\"least\">{{least}}</span> <div  class=\"list-item__actions\" *ngIf=\"actions\"> <i class=\"{{action.prefix}} {{action.prefix}}-{{action.value ? action.iconActive : action.icon}}\" [ngStyle]=\"{'font-size': action.size + 'px'}\" (click)=\"action.callback(data); action.value = ! action.value\" *ngFor=\"let action of actions\" ></i> </div> </div> </div>"
})
export class ListItemFileQeueComponent {
    @Input('index') public index: string;
    @Input('hasLine') public hasLine: boolean;
    @Input('data') public data: any;
    @Input('actions') public actions: [Action];
    @Input('customClass') public customClass: string;
    @Output() public onSelected = new EventEmitter<any>();
    @Output() public onClicked = new EventEmitter<any>();
    public isChecked = false;
    /**
     * select
     */
    public select() {
        this.onSelected.emit(this.index);
        this.isChecked = !this.isChecked;
    }
    /**
     * click
     */
    public click() {
        this.onClicked.emit(this.index);
    }
}
