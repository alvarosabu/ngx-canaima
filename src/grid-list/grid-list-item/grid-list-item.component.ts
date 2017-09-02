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
    templateUrl: 'grid-list-item.component.html'
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
