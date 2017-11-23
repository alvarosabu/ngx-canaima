import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'datatable',
    templateUrl: 'datatable.component.html',
    styleUrls: [
        './datatable.component.scss'
    ]
})
export class DatatableActivityComponent implements OnInit {
    public navBar: any = {
        brand: {
            logo: '/assets/svg/ngx-canaima.svg'
        },
        title: this.route.snapshot.data['title']
    };
    constructor(
        private route: ActivatedRoute,
    ) { }

    public ngOnInit() { }
}