import { Badge } from './../../../../src/badges/badge';
import { Chip } from './../../../../src/chip/chip';
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
import { Segment } from './../../../../src/segment/segment';
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
                        new Action({label:'Action 1'}),
                        new Action({label:'Action 12'})
                    ]),
                new Action({
                    callback: () => {
                        console.log('Filter');
                    },
                    icon: 'filter'
                })
            ]
        }
    );
    public header: Header = new Header(
        {
            title: 'Header Title',
            subtitle: 'Waaaa subtitle',
            bg: '../assets/img/header2.png',
            msg: `Venmo banjo semiotics, scenester hexagon beard schlitz` +
                `chic flannel coloring book portland kickstarter.`,
            customClass: null,
            parallax: true
        }
    );
    public segments: Segment[] = [
        new Segment({
            label: 'Buttons',
            value: 'buttons'
        }),
        new Segment({
            label: 'Chips & Badges',
            value: 'chips-badges'
        }),
        new Segment({
            label: 'FABs',
            value: 'fabs'
        })
    ];
    public selectedTab: Segment = this.segments[0];
    public avatarChip: Chip = new Chip({
        img: '../assets/img/jonsnow.png',
        content: 'Jon Snow'
    });
    public iconChip: Chip = new Chip({
        prefix: 'mdi',
        icon: 'folder',
        content: 'Folder 1'
    });
    public tagChips: Chip[] = [];
    public badgeIcon: Badge = new Badge({
        icon: 'bell',
        count: '2'
    });
    constructor(
        private route: ActivatedRoute,
    ) { }

    public ngOnInit() {
        for (let i = 0; i < 5; i++) {
            this.tagChips.push(new Chip(
                {
                    id: i,
                    content: `Tag ${i}`,
                    delete: true,
                }
            ));
        }
    }
    /**
     * clickedChip
     */
    public clickedChip(chip: Chip) {
        console.log('Chip selected', chip);
    }
    /**
     * deletedChip
     */
    public deletedChip(chip: Chip) {
        this.tagChips = this.tagChips.filter((item) => item.id !== chip.id);
        console.log('Chip deleted', chip);
    }
}
