import {
    Component,
    OnInit,
    Input,
    Output,
    ViewEncapsulation,
    EventEmitter
} from '@angular/core';
import { Nav } from './nav';
@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'as-navmenu',
    templateUrl: 'navmenu.component.html'
})
export class NavmenuComponent implements OnInit {
    @Input('navs') public navs: Nav[];
    @Input('open') public open: boolean;
    @Input('collapsable') public collapsable: boolean;
    @Input('showIcons') public showIcons: boolean;
    @Input('customClass') public customClass: string;
    @Input('shadow') public shadow: string;
    @Output() public onSelect = new EventEmitter<Nav>();
    constructor(
    ) {

    }
    public ngOnInit() {
    }
    /**
     * openCollapsable
     */
    public openCollapsable() {
        this.collapsable = !this.collapsable;
    }
    public selectNav(nav: Nav) {
        this.onSelect.emit(nav);
        /* if (nav.anchor) {
            this.open = false;
        } */
    }
}
