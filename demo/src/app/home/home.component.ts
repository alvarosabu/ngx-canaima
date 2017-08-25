import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import {
    ToastyService
} from 'ng2-toasty';

@Component({
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'home.component.html',
    styleUrls: [
        './home.component.scss'
    ]
})
export class HomeComponent implements OnInit {

    public openDropdown: boolean = false;
    public navBar: any = {
        brand: {
            logo: '/assets/svg/ngx-canaima.svg'
        }
    };
    public components = [
        {
            label: 'Cards',
            illustration: '/assets/svg/cards-illustration.svg',
            comming: false,
            slug: 'cards',
            // tslint:disable-next-line:max-line-length
            msg: `A card is a sheet of material that serves as an entry point to more detailed information.`
        },
        {
            label: 'Lists',
            illustration: '/assets/svg/lists-illustration.svg',
            comming: true,
            msg: `Lists present multiple line items vertically as a single continuous element`
        }
    ];
    constructor(
        public toastService: ToastyService
    ) {}

    public ngOnInit() {

    }

}