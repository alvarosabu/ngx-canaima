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
    selector: 'as-modal',
    templateUrl: 'modal.component.html'
})

export class ModalComponent implements OnChanges, AfterViewInit  {
    @ViewChild('asModal') public asModal: ModalDirective;
    @Input('title') public title: string;
    @Input('img') public img: string;
    @Input('msg') public msg: string;
    @Input('open') public open: boolean;
    @Input('size') public size = 'sm';
    @Input('customClass') public customClass: string;
    @Input('actions') public actions: Action[];
    @Input('footer') public footer: any = {
        justify: 'flex-end',
        alignment: 'center'
    };
    @Output() public onClosed = new EventEmitter<boolean>();
    @Output() openChange: EventEmitter<boolean> = new EventEmitter();
    constructor() {}
    public ngAfterViewInit() {
         this.asModal.onHide
        .subscribe((res) => {
            this.openChange.emit(false);
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