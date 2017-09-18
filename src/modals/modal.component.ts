import {
    Component,
    OnInit,
    Input,
    Output,
    OnChanges,
    EventEmitter,
    AfterViewInit,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { Action } from '../action';
@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'as-modal',
    templateUrl: 'modal.component.html',
    styleUrls: [
        './modals.component.scss'
    ]
})

export class ModalComponent implements OnChanges, AfterViewInit  {
    @ViewChild('asModal') public asModal: ModalDirective;
    @Input('title') public title: string;
    @Input('img') public img: string;
    @Input('msg') public msg: string;
    @Input('open') public open: string;
    @Input('size') public size: string;
    @Input('customClass') public customClass: string;
    @Input('actions') public actions: Action[];
    @Output() public onClosed = new EventEmitter<any>();
    constructor() {}
    public ngAfterViewInit() {
         this.asModal.onHide
        .subscribe((res) => {
            this.onClosed.emit();
        });
    }
    public ngOnChanges(changes: any) {
        if (changes.open !== undefined && changes.open.previousValue !== undefined) {
            if (changes.open.currentValue) {
                this.asModal.show();
            }else {
                this.asModal.hide();
            }
        }
    }
}