
import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Action } from './../../../../src/action';
import { GridListItem } from './../../../../src/grid-list/grid-list-item/grid-list-item';
@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'grid',
    templateUrl: 'grid.component.html',
    styleUrls: [
        './grid.component.scss'
    ]
})
export class GridComponent implements OnInit {
    public navBar: any = {
        brand: {
            logo: '/assets/svg/ngx-canaima.svg'
        },
        title: this.route.snapshot.data['title']
    };
    public gridList: GridListItem[] = [
        new GridListItem({
            _id: 1,
            title: 'Jon Snow',
            subtitle: 'a.k.a Aegon Targaryen',
            img: '../assets/img/jonsnow.png',
            persistent: true
        }),
        new GridListItem({
            _id: 2,
            title: 'Cersei Lannister',
            subtitle: 'a.k.a The mad Queen',
            img: '../assets/img/cersei-lannister.jpg',
            action:
            new Action({
                callback: () => {
                    console.log('Liked 1');
                },
                icon: 'share-variant',
                iconActive: 'share-variant',
            }),
            persistent: false
        }),
        new GridListItem(
            {
                _id: 3,
                title: 'Daenery Targaryen',
                subtitle: 'a.k.a The mother of Dragons',
                img: '../assets/img/daenerys-targaryen.jpg',
                action:
                new Action({
                    callback: () => {
                        console.log('Liked 1');
                    },
                    icon: 'share-variant',
                    iconActive: 'share-variant',
                }),
                persistent: true
            }
        ),
        new GridListItem(
            {
                _id: 4,
                title: 'Jaime Lannister',
                subtitle: 'a.k.a The King\'s Slayer',
                img: '../assets/img/jaime-lannister.jpg',
                action:
                    new Action({
                        callback: () => {
                            console.log('Liked 1');
                        },
                        icon: 'share-variant',
                        iconActive: 'share-variant',
                    }),
                persistent: true
            }
        ),
        new GridListItem(
            {
                _id: 5,
                title: 'Tyrion Lannister',
                subtitle: 'a.k.a The Dwarf',
                img: '../assets/img/tyrion-lannister.png',
                action:
                    new Action({
                        callback: () => {
                            console.log('Liked 1');
                        },
                        icon: 'share-variant',
                        iconActive: 'share-variant',
                    }),
                persistent: true
            }
        ),
        new GridListItem(
            {
                _id: 6,
                title: 'Knight King',
                subtitle: 'a.k.a The White Walker\'s papa',
                img: '../assets/img/knight-king.jpg',
                action:
                    new Action({
                        callback: () => {
                            console.log('Liked 1');
                        },
                        icon: 'share-variant',
                        iconActive: 'share-variant',
                    }),
                persistent: true
            }
        )
    ];
    constructor(
        private route: ActivatedRoute,
    ) { }

    public ngOnInit() { }
}
