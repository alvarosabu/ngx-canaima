
import {
    Component,
    OnInit,
    Input,
    Output,
    ViewEncapsulation,
    EventEmitter
} from '@angular/core';
import { Action } from './../action';
import { ActionDropdown } from './../action-dropdown';
@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'as-profile-dropdown',
    templateUrl: 'profile-dropdown.component.html'
})
export class ProfileDropdownComponent implements OnInit {
   /*  @Input('segments') public segments: Segment[];
    @Input('selectedTab') public selectedTab: Segment;
    @Output() selectedTabChange: EventEmitter<Segment> = new EventEmitter();
    @Input('align') public align = 'center';
    
    @Input('shadow') public shadow: string; */
    
    @Input('title') public title: string;
    @Input('img') public img: string;
    @Input('defaultImg') public defaultImg: string;
    @Input('orientation') public orientation = 'horizontal';
    @Input('dropdown') public dropdown: Action[];
    @Input('lastAction') public lastAction: Action;
    @Input('prefix') public prefix = 'mdi';
    @Input('caret') public caret = 'chevron-down';
    @Input('bubble') public bubble = false;
    @Input('customClass') public customClass: string;
    constructor(
    ) {

    }
    public ngOnInit() {
       
    }

}
