import {
    Component,
    OnInit,
    Input,
    Output,
    ViewEncapsulation
} from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../../core/nav/nav.service';
import {
  User
} from '../user';
import { Nav } from '../../core/nav/nav';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'as-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: [
        './navbar.component.scss'
    ]
})
export class NavbarComponent implements OnInit {
    @Input('brand') public brand: any;
    @Input('actions') public actions: [any];
    @Input('back') public back: string;
    @Input('title') public title: string;
    @Input('subtitle') public subtitle: any;
    @Input('shadow') public shadow: [any];
    @Input('fixed') public fixed: boolean;
    @Input('searchBar') public searchBar: any;
    @Input('customClass') public customClass: any;

    public collapsable = false;
    constructor(
        private router: Router,
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
}
