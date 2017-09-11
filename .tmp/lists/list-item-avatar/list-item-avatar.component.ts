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
    selector: 'as-list-item-avatar',
    template: "<div  class=\"list-item list-item--avatar {{customClass}} \"  [ngClass]=\"{'list-item--line': hasLine}\" (click)=\"click()\" > <div class=\"list-item__thumb\" *ngIf=\"img\" (mouseover)='hover = true' (mouseleave)='hover = false'> <div class=\"list-item__img circle\" [ngStyle]=\"{'background-image': 'url(' + img + ')'}\" *ngIf=\"!hover && !isChecked && img\"></div> <div class=\"checkbox\" *ngIf=\"hover || isChecked\"> <label> <input type=\"checkbox\" [checked]=\"isChecked\" (click)=\"select()\"> </label> </div> </div> <div class=\"list-item__content\"> <h5  class=\"list-item__title\" *ngIf=\"title\">{{title}}</h5> <span  class=\"list-item__subtitle\" *ngIf=\"subtitle\">{{subtitle}}</span> </div> <div class=\"list-item__side\"> <span class=\"list-item__least\"  *ngIf=\"least\">{{least}}</span> <div class=\"list-item__actions\" *ngIf=\"actions\"> <i class=\"{{action.prefix}} {{action.prefix}}-{{action.value ? action.iconActive : action.icon}}\" [ngStyle]=\"{'font-size': action.size + 'px'}\" (click)=\"action.callback(); action.value = ! action.value\" *ngFor=\"let action of actions\" ></i> </div> </div> </div>"
})
export class ListItemAvatarComponent {
    @Input('index') public index: string;
    @Input('title') public title: string;
    @Input('subtitle') public subtitle: string;
    @Input('hasLine') public hasLine: boolean;
    @Input('img') public img: string;
    @Input('least') public least: string;
    @Input('actions') public actions: [Action];
    @Input('customClass') public customClass: string;

    @Output() public onSelected = new EventEmitter<any>();
    @Output() public onClicked = new EventEmitter<any>();
    public isChecked = false;
    public hover = false;

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
