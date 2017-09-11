
import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionDropdown } from './../../../../src/action-dropdown';
import { Action } from './../../../../src/action';
import { Toolbar } from './../../../../src/toolbar/toolbar';
import { Header } from './../../../../src/header/header';
@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'layout',
    templateUrl: 'layout.component.html',
    styleUrls: [
        './layout.component.scss'
    ]
})
export class LayoutComponent implements OnInit {
    public toolBar: Toolbar = new Toolbar(
        {
            brand: {
                logo: '/assets/svg/ngx-canaima.svg'
            },
            customClass: 'navbar--primary navbar--subheader',
            fixed: true,
            title: this.route.snapshot.data['title'],
            actions: [
                new ActionDropdown(null,
                    [
                        new Action('Action 1'),
                        new Action('Action 2')
                    ]),
                new Action(null, () => {
                    console.log('Filter');
                }, 'filter')
            ]
        }
    );
    public header: Header = new Header(
        {
            title: 'Header Title',
            subtitle: 'Waaaa subtitle',
            bg: '../assets/img/header.png',
            msg: `Venmo banjo semiotics, scenester hexagon beard schlitz` +
                `chic flannel coloring book portland kickstarter.`,
            customClass: null,
            parallax: true
        }
    );
    constructor(
        private route: ActivatedRoute,
    ) { }

    public ngOnInit() { }
}