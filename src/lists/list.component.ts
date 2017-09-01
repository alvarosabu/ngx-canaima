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
    selector: 'as-list',
    templateUrl: 'list.component.html'
})
export class ListComponent {
    @Input('title') public title: string;
    @Input('height') public height: string;
    @Input('scroll') public scroll: string;
    @Input('customClass') public customClass: string;
}
