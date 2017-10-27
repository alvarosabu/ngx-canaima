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
    templateUrl: 'list-item.component.html'
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
    /**
     * actionCallback
     */
    public actionCallback(action: Action) {
        action.active = !action.active;
        action.callback()
    }
}
