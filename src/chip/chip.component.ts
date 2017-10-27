
import {
    Component,
    OnInit,
    ViewEncapsulation,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

import { Action } from './../action';
import { Chip } from './chip';

@Component({
    selector: 'as-chip',
    templateUrl: 'chip.component.html'
})
export class ChipComponent {
    @Input('img') public img: string;
    @Input('prefix') public prefix = 'mdi';
    @Input('icon') public icon: string;
    @Input('content') public content: any;
    @Input('delete') public delete: Action;
    @Input('customClass') public customClass: string;
    @Input('shadow') public shadow: string;
    @Output() onClicked: EventEmitter<boolean> = new EventEmitter();
    @Output() onDeleted: EventEmitter<boolean> = new EventEmitter();

    /**
     * clickedChip
     *
     * @memberof ChipComponent
     */
    public clickedChip() {
        this.onClicked.emit(true);
    }
    /**
     * deleteChip
     *
     * @memberof ChipComponent
     */
    public deleteChip() {
        this.onDeleted.emit(true);
    }
}
