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
    selector: 'as-grid-list',
    templateUrl: 'grid-list.component.html'
})
export class GridListComponent {
    @Input('title') public title: string;
    @Input('customClass') public customClass: string;
}
