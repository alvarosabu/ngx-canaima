import { ActivatedRoute } from '@angular/router';
import { Toolbar } from './../../../../src/toolbar/toolbar';
import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { Modal } from './../../../../src/modals/modal';
@Component({
    selector: 'modals',
    templateUrl: 'modals.component.html',
    styleUrls: [
        './modals.component.scss'
    ]
})
export class ModalsComponent implements OnInit {
    public navBar: any = {
        brand: {
            logo: '/assets/svg/ngx-canaima.svg'
        },
        title: this.route.snapshot.data['title']
    };
    public smallModal: Modal = new Modal(
        {
            title: 'Small Modal',
            open: false,
            size: 'sm',
            msg: 'Hi I\'m a little small little bitch modal',
            onClosed: ($e) => {
                console.log('Small Modal closed');
            }
        }
    );
    constructor(
        private route: ActivatedRoute,
    ) { }

    public ngOnInit() { }

    /**
     * openModal
     *
     * @param {Modal} modal
     * @memberof ModalsComponent
     */
    public openModal(modal: Modal) {
        modal.open = !modal.open;
    }
}
