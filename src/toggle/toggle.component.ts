
import {
    Component,
    OnInit,
    ViewEncapsulation,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

import { Action } from './../action';
import { Toggle } from './toggle';

@Component({
    selector: 'as-toggle',
    templateUrl: 'toggle.component.html'
})
export class ToggleComponent {
    @Input('toggle') public toggle: Action;
    @Output() toggleChange: EventEmitter<boolean> = new EventEmitter();

    /**
     * touchToggle
     *
     * @memberof ToggleComponent
     */
    public touchToggle() {
        this.toggleChange.emit(this.toggle.value);
    }
}
