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
    selector: 'as-grid-list-item',
    template: "<div class=\"grid-list-item {{customClass}} shadow-{{shadow}}\" (mouseover)=\"showFooter = true\" (mouseleave)=\"showFooter = false\"> <div class=\"grid-list-item__content\" [ngStyle]=\"{'background-image': 'url(' + img + ')'}\"> </div> <div  class=\"grid-list-item__footer\" [ngStyle]=\"!action && {'justify-content': 'center'}\"  *ngIf=\"showFooter || persistent\"> <span class=\"grid-list-item__title\">{{title}}</span> <div class=\"grid-list-item__action\" *ngIf=\"action\"> <i class=\"{{action.prefix}} {{action.prefix}}-{{action.value ? action.iconActive : action.icon}}\" [ngStyle]=\"{'font-size': action.size + 'px'}\" (click)=\"action.callback(); action.value = ! action.value\"></i> </div> </div> </div>"
})

export class GridListItemComponent {
    @Input('index') public index: string;
    @Input('title') public title: string;
    @Input('img') public img: string;
    @Input('subtitle') public subtitle: string;
    @Input('shadow') public shadow: string;
    @Input('action') public action: Action;
    @Input('customClass') public customClass: string;
    @Input('persistent') public persistent: boolean;
    @Output() public onSelected = new EventEmitter<any>();
    public isChecked = false;
    public showFooter = false;
    /**
     * select
     */
    public select() {
        this.onSelected.emit(this.index);
        this.isChecked = !this.isChecked;
    }
}
