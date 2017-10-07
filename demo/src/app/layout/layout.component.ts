import { ProfileDropdown } from './../../../../src/profile-dropdown/profile-dropdown';
import { EmptyState } from './../../../../src/empty-state/empty-state';

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
import { Fab } from './../../../../src/fabs/fab';
import { Badge } from './../../../../src/badges/badge';
import { Chip } from './../../../../src/chip/chip';

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
                        new Action({label: 'Action 1'}),
                        new Action({label: 'Action 12'})
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
    public profile: ProfileDropdown = new ProfileDropdown(
        {
            title: 'Your Profile',
            img: '../assets/img/jonsnow.png',
            defaultImg: '../assets/img/profile.png',
            dropdown: [
                new Action({
                    label: 'Your profile',
                    callback: () => {
                        console.log('goToProfile');
                    },
                    icon: 'account'
                }),
                new Action({
                    label: 'Settings',
                    callback: () => {
                        console.log('goToSettings');
                    },
                }),
                new Action({
                    label: 'Web Page',
                    link: 'http://alvarosaburido.com'
                })
            ],
            lastAction: new Action({
                label: 'Logout',
                callback: () => {
                    console.log('logout');
                }
            })
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
        }),
        new Segment({
            label: 'Loaders',
            value: 'loading'
        }),
        new Segment({
            label: 'Empty States',
            value: 'empty-state'
        }),
        new Segment({
            label: 'Content Placeholder',
            value: 'content-placeholder'
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
    public simpleFab: Fab = new Fab({
        color: 'primary',
        icon: 'plus',
        iconActive: 'plus'
    });
    public menuFab: Fab = new Fab({
        color: 'secondary',
        icon: 'menu',
        iconActive: 'plus',
        type: 'circle',
        menu: [
            new Action({
                color: 'primary',
                icon: 'settings'
            }),
            new Action({
                color: 'success',
                icon: 'android'
            }),
            new Action({
                color: 'info',
                icon: 'message'
            }),
            new Action({
                color: 'warning',
                icon: 'message'
            })
        ]
    });
    public settingsFab: Fab = new Fab({
        color: 'success',
        icon: 'settings',
        iconActive: 'plus',
        type: 'horizontal',
        position: 'bottom left',
        menu: [
            new Action({
                color: 'primary',
                icon: 'settings',
            }),
            new Action({
                color: 'success',
                icon: 'android',
            }),
            new Action({
                color: 'info',
                icon: 'message',
            }),
            new Action({
                color: 'warning',
                icon: 'message',
            })
        ]
    });
    public emptyState: EmptyState = new EmptyState({
        title: 'Oops, it looks like we have nothing to say yet',
        // tslint:disable-next-line:max-line-length
        msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi enim quibusdam illum architecto asperiores tempore tempora dolores perspiciatis saepe? Porro, necessitatibus ab cupiditate maiores minima in pariatur illum natus velit.',
        img: '/assets/svg/empty-state.svg',
        actions: [
            new Action({
                icon: 'refresh',
                color: 'primary',
                rounded: true
            })
        ]
    });
    public contentLoading: boolean = true;
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
        setTimeout(() => {
            this.contentLoading = false;
        }, 2000);
    }
    /**
     * search
     */
    public search(e) {
        console.log('Search', e);
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
