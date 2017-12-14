import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'noContent',
    templateUrl: 'no-content.component.html',
    styleUrls: [
        './no-content.component.scss'
    ]
})
export class NoContentComponent implements OnInit {
    constructor() { }

    public ngOnInit() { }
}
