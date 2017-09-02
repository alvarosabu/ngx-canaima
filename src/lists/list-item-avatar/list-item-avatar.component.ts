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
    templateUrl: 'list-item-avatar.component.html'
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
