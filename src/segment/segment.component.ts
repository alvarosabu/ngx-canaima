import {
    Component,
    OnInit,
    Input,
    Output,
    ViewEncapsulation,
    EventEmitter
} from '@angular/core';
import { Segment } from './segment';
@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'as-segment',
    templateUrl: 'segment.component.html'
})
export class SegmentComponent implements OnInit {
    @Input('segments') public segments: Segment[];
    @Input('selectedTab') public selectedTab: Segment;
    @Output() selectedTabChange: EventEmitter<Segment> = new EventEmitter();
    @Input('align') public align = 'center';
    @Input('customClass') public customClass: string;
    @Input('shadow') public shadow: string;
    constructor(
    ) {

    }
    public ngOnInit() {
        this.selectedTab.active = true;
    }
    /**
     * selectTab
     */
    public selectTab(tab: Segment) {
        tab.active = true;
        this.selectedTab = tab;
        this.selectedTabChange.emit(tab);
    }
}
