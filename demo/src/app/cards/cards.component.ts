
import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { Action } from '../../../../src/action';
import { ActionDropdown } from '../../../../src/action-dropdown';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'cards',
    templateUrl: 'cards.component.html',
    styleUrls: [
        './cards.component.scss',
    ]
})
export class CardsComponent implements OnInit {
    public navBar: any = {
        brand: {
            logo: '/assets/img/logo-white.png'
        }
    };
    public cardSimple = {
        title: 'Simple Card',
        subtitle: 'Waaaa subtitle',
        msg: `Venmo banjo semiotics, scenester hexagon beard schlitz` +
            `chic flannel coloring book portland kickstarter.`,
        actions: [
            new Action('Action 1'),
            new Action('Action 2')
        ],
        specialActions: [
            new Action('Action 1', null, null, null, false, 'btn-primary'),
            new Action('Action 2', null, null, null, false, 'btn-primary'),
        ],
        optionsLeft: [
            new Action(null, () => {
                console.log('Back');
            }, 'chevron-left')
        ],
        optionsRight: [
            new ActionDropdown(null,
                [
                    new Action('Action 1'),
                    new Action('Action 2')
                ]),
            new Action(null, () => {
                console.log('Filter');
            }, 'filter')
        ]
    };
    public cardImage = {
        img: 'https://s3.favim.com/610/150115/fireworks-heart-hipster-pastel-Favim.com-2386613.jpg',
        title: 'Card Image',
        subtitle: 'Waaaa subtitle',
        msg: `Venmo banjo semiotics, scenester hexagon beard schlit` +
        `shoreditch delectus organic shabby chic flannel coloring boo` +
        `portland kickstarter`,
        fab: new Action(null, () => {
            console.log('Fab Action');
        }, 'plus', null, false, 'btn-primary', 'mdi', 'md'),
        optionsRight: [
            new ActionDropdown(null,
                [
                    new Action('Action 1'),
                    new Action('Action 2')
                ]),
            new Action(null, () => {
                console.log('Filter');
            }, 'filter')
        ],
        optionsLeft: [
            new Action(null, () => {
                console.log('Back');
            }, 'chevron-left')
        ],
        actions: [
            new Action('Action 1'),
            new Action('Action 2'),
        ],
        footer: {
            justify: 'flex-end',
            alignment: 'center'
        }
    };
    public cardBg = {
        bg: 'https://s-media-cache-ak0.pinimg.com/originals/1d/77/98/1d779888d2894348e9577fe3329d682b.jpg',
        title: 'Card Background',
        subtitle: 'Waaaa subtitle',
        optionsRight: [
            new ActionDropdown(null,
                [
                    new Action('Action 1'),
                    new Action('Action 2')
                ]),
            new Action(null, () => {
                console.log('Filter');
            }, 'filter')
        ],
        optionsLeft: [
            new Action(null, () => {
                console.log('Back');
            }, 'chevron-left')
        ],
        actions: [
            new Action('Action 1'),
            new Action('Action 2'),
        ],
        footer: {
            justify: 'flex-end',
            alignment: 'center'
        }
    };
    public cardData = {
        title: 'Data Card',
        subtitle: 'Waaaa subtitle',
        img: 'https://img06.deviantart.net/29f9/i/2014/018/0/e/hipster_wallpaper_by_bomberbb-d72q9no.png',
        actions: [
            new Action(null, () => {
                console.log('Data action1');
              }, 'heart-outline', 'heart', false),
        ]
    };
    constructor() {}

    public ngOnInit() {}
}