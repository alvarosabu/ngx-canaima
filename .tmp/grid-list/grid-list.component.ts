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
    template: "<div class=\"grid-list  {{customClass}} \"> <ng-content select=\"[gridlist-body]\" ></ng-content> </div>"
})
export class GridListComponent {
    @Input('title') public title: string;
    @Input('customClass') public customClass: string;
}
