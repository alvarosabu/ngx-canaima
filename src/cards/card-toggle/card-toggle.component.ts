import {
    Component,
    OnInit,
    OnChanges,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'as-card-toggle',
    templateUrl: 'card-toggle.component.html'
})
export class CardToggleComponent implements OnInit {
    @Input('prefix') public prefix = `mdi`;
    @Input('icon') public icon: string;
    @Input('title') public title: string;
    @Input('subtitle') public subtitle: string;
    @Input('toggle') public toggle: [any];
    @Input('shadow') public shadow: [any];
    @Input('customClass') public customClass: string;
    public hover: boolean;

    public ngOnInit() {
        this.hover = false;
     }

}
