import {
    Component,
    OnInit,
    ViewEncapsulation,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
@Component({
    selector: 'circle-fab',
    templateUrl: 'circle-fab.component.html',
    styleUrls: [
        './circle-fab.component.scss'
    ]
})
export class CircleFabComponent implements OnInit {
    @Input('bg') public bg: boolean;
    @Input('menu') public menu: any;
    @Input('btnClass') public btnClass: string = 'primary';
    public active: boolean = false;
    constructor() { }

    public ngOnInit() { }
    /**
     * openCircle
     */
    public openCircle() {
        this.active = !this.active;
    }
}