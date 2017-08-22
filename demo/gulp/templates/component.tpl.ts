import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: '<%= name %>',
    templateUrl: '<%= name %>.component.html',
    styleUrls: [
        './<%= name %>.component.scss',
        '../shared/modal/modal.component.scss',
        '../shared/cards/cards.component.scss'
    ]
})
export class <%= capitalname %>Component implements OnInit {
    constructor() { }

    public ngOnInit() { }
}