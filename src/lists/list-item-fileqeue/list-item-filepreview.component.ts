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
    selector: 'as-list-item-filepreview',
    templateUrl: 'list-item-filepreview.component.html',
    styleUrls: [
        './lists.component.scss'
    ]
})
export class ListItemFilePreviewComponent {
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
