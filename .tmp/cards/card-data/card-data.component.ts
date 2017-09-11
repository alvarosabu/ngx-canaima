import {
    Component,
    OnInit,
    Input,
} from '@angular/core';
import { Action } from './../../action';
@Component({
    selector: 'as-card-data',
    template: "<div class=\"card card--data shadow-{{shadow}} {{customClass}}\"> <div class=\"card__thumb\"  *ngIf=\"img\" (mouseover)='hover = true' (mouseleave)='hover = false' > <div class=\"card--data__img circle\" [ngStyle]=\"{'background-image': img && 'url(' + img + ')'}\" *ngIf=\"!hover\"></div> <div class=\"checkbox\" *ngIf=\"hover\"> <label> <input type=\"checkbox\" value=\"\"> </label> </div> </div> <div class=\"card__content\"> <h5  class=\"card--data__title\" *ngIf=\"title\">{{title}}</h5> <span  class=\"card--data__subtitle\" *ngIf=\"subtitle\">{{subtitle}}</span> </div> <div class=\"card--data__actions\" *ngIf=\"actions\"> <i class=\"{{action.prefix}} {{action.prefix}}-{{action.value ? action.iconActive : action.icon}}\" (click)=\"action.callback(); action.value = ! action.value\" *ngFor=\"let action of actions\" ></i> </div> </div>"
})
export class CardDataComponent implements OnInit {
    @Input('img') public img: string;
    @Input('title') public title: string;
    @Input('subtitle') public subtitle: string;
    @Input('actions') public actions: Action[];
    @Input('shadow') public shadow: [any];
    @Input('customClass') public customClass: string;
    public hover: boolean;

    public ngOnInit() {
        this.hover = false;
     }
}
