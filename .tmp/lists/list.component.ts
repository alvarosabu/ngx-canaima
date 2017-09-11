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
    template: "<div  class=\"list {{customClass}}\"  [ngStyle]=\"{'height': height + 'px'}\" [ngClass]=\"{'list--scrollable': scroll}\"> <div  class=\"list__header\" *ngIf=\"title\"> {{title}} </div> <ng-content select=\"[list-body]\" ></ng-content> </div>"
})
export class ListComponent {
    @Input('title') public title: string;
    @Input('height') public height: string;
    @Input('scroll') public scroll: string;
    @Input('customClass') public customClass: string;
}
