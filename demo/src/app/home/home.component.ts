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
            logo: '/assets/img/logo-white.png'
        }
    };
    constructor(
        public toastService: ToastyService
    ) {}

    public ngOnInit() {

    }

}