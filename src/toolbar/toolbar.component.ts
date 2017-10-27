

import {
    Component,
    OnInit,
    Input,
    Output,
    ViewEncapsulation
} from '@angular/core';
import { ToolbarMenuService } from './menu.service';
import { ActionDropdown } from '../action-dropdown';
import { Action } from '../action';
@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'as-toolbar',
    templateUrl: 'toolbar.component.html'
})
export class ToolbarComponent implements OnInit {
    @Input('brand') public brand: any;
    @Input('actions') public actions: [any];
    @Input('back') public back: string;
    @Input('title') public title: string;
    @Input('subtitle') public subtitle: any;
    @Input('shadow') public shadow: string;
    @Input('fixed') public fixed: boolean;
    @Input('menuSide') public menuSide = 'left';
    @Input('customClass') public customClass: any;

    public collapsable = false;
    constructor(
        private menu: ToolbarMenuService
    ) {

    }
    public ngOnInit() {
        this.menu.openMenu$
        .subscribe((val) => {
            this.collapsable = val;
        }
        );
    }
    /**
     * openCollapsable
     */
    public openCollapsable() {
        this.collapsable = !this.collapsable;
        this.menu.openMenu(this.collapsable);
    }
    public isActionDropdown(action: (Action | ActionDropdown)) {
        return action instanceof ActionDropdown;
    }
}
