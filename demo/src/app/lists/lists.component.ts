import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Action } from '../../../../src/action';
import { ListItemAvatar } from './../../../../src/lists/list-item-avatar/list-item-avatar';
import { ListItemIcon } from './../../../../src/lists/list-item-icon/list-item-icon';
import { ListItem } from './../../../../src/lists/list-item/list-item';
import { ListItemCheck } from './../../../../src/lists/list-item-check/list-item-check';
import { ListItemProperty } from './../../../../src/lists/list-item-property/list-item-property';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'lists',
    templateUrl: 'lists.component.html',
    styleUrls: [
        './lists.component.scss',
    ]
})
export class ListsComponent implements OnInit {
    public navBar: any = {
        brand: {
            logo: '/assets/svg/ngx-canaima.svg'
        },
        title: this.route.snapshot.data['title']
    };
    public simpleList: ListItem[] = [
        new ListItem({
            _id: 1,
            title: 'Monsters Cards',
            subtitle: 'Yup!! Subtitle here',
            actions: [
                new Action(null, () => {
                    console.log('Liked 1');
                }, 'chevron-right', 'chevron-right',
                false, null, 'mdi', '18')
            ]
        }),
        new ListItem({
            _id: 2,
            title: 'Spell Cards',
            subtitle: 'Yup!! Subtitle here',
            actions: [
                new Action(null, () => {
                    console.log('Liked 1');
                }, 'chevron-right', 'chevron-right',
                false, null, 'mdi', '18')
            ]
        })
    ];
    public iconList: ListItemIcon[] = [
        new ListItemIcon({
            _id: 1,
            title: 'Amazon',
            subtitle: 'Yup!! Subtitle here',
            icon: 'amazon',
            actions: [
                new Action(null, () => {
                    console.log('Liked 1');
                }, 'information', 'information',
                false, null, 'mdi', '18')
            ]
        }),
        new ListItemIcon({
            _id: 2,
            title: 'Android',
            subtitle: 'Yup!! Subtitle here',
            icon: 'android',
            actions: [
                new Action(null, () => {
                    console.log('Liked 1');
                }, 'information', 'information',
                false, null, 'mdi', '18')
            ]
        }),
        new ListItemIcon({
            _id: 3,
            title: 'Apple',
            subtitle: 'Yup!! Subtitle here',
            icon: 'apple',
            actions: [
                new Action(null, () => {
                    console.log('Liked 1');
                }, 'information', 'information',
                false, null, 'mdi', '18')
            ]
        }),
        new ListItemIcon({
            _id: 4,
            title: 'Angular',
            subtitle: 'Yup!! Subtitle here',
            icon: 'angular',
            actions: [
                new Action(null, () => {
                    console.log('Liked 1');
                }, 'information', 'information',
                false, null, 'mdi', '18')
            ]
        })
    ];
    public gotList: ListItemAvatar[] = [
        new ListItemAvatar({
            _id: 1,
            title: 'Jon Snow',
            subtitle: 'a.k.a Aegon Targaryen',
            img: '../assets/img/jonsnow.png',
            least: '5 min',
            actions: [
                new Action(null, () => {
                    console.log('Shared 1');
                }, 'share-variant', 'share-variant',
                false, null, 'mdi', '24')
            ]
        }),
        new ListItemAvatar({
            _id: 2,
            title: 'Cersei Lannister',
            subtitle: 'a.k.a The mad Queen',
            img: '../assets/img/cersei-lannister.jpg',
            least: '15 min',
            actions: [
                new Action(null, () => {
                    console.log('Shared 1');
                }, 'share-variant', 'share-variant',
                false, null, 'mdi', '24')
            ]
        }),
        new ListItemAvatar(
            {
                _id: 3,
                title: 'Daenery Targaryen',
                subtitle: 'a.k.a The mother of Dragons',
                img: '../assets/img/daenerys-targaryen.jpg',
                least: '20 min',
                actions: [
                    new Action(null, () => {
                        console.log('Shared 1');
                    }, 'share-variant', 'share-variant',
                    false, null, 'mdi', '24')
                ]
            }
        ),
        new ListItemAvatar(
            {
                _id: 4,
                title: 'Jaime Lannister',
                subtitle: 'a.k.a The King\'s Slayer',
                img: '../assets/img/jaime-lannister.jpg',
                least: '25 min',
                actions: [
                    new Action(null, () => {
                        console.log('Shared 1');
                    }, 'share-variant', 'share-variant',
                    false, null, 'mdi', '24')
                ]
            }
        ),
        new ListItemAvatar(
            {
                _id: 5,
                title: 'Tyrion Lannister',
                subtitle: 'a.k.a The Dwarf',
                img: '../assets/img/tyrion-lannister.png',
                least: '35 min',
                actions: [
                    new Action(null, () => {
                        console.log('Shared 1');
                    }, 'share-variant', 'share-variant',
                    false, null, 'mdi', '24')
                ]
            }
        )
    ];
    public todoList: [ListItemCheck] = [
        new ListItemCheck({
            _id: 1,
            title: 'Do Laundry',
            least: '5 min',
            actions: [
                new Action(null, () => {
                    console.log('Shared 1');
                }, 'delete', 'delete',
                false, null, 'mdi', '24')
            ]
        }),
        new ListItemCheck({
            _id: 2,
            title: 'Be Awesome',
            least: '5 min',
            actions: [
                new Action(null, () => {
                    console.log('Shared 1');
                }, 'delete', 'delete',
                false, null, 'mdi', '24')
            ]
        }),
        new ListItemCheck({
            _id: 3,
            title: 'Buy some Pizza with Bacon',
            least: '5 min',
            actions: [
                new Action(null, () => {
                    console.log('Shared 1');
                }, 'delete', 'delete',
                false, null, 'mdi', '24')
            ]
        })
    ];
    public propertyList: [ListItemProperty] = [
        new ListItemProperty(
            {
                _id: 1,
                key: 'Name',
                value: 'Jon Snow'
            }
        ),
        new ListItemProperty(
            {
                _id: 2,
                key: 'House',
                value: 'Stark'
            }
        )
    ];
    constructor(
        private route: ActivatedRoute,
    ) { }

    public ngOnInit() { }
}
