import { Action } from './../../../../src/action';
import { ActivatedRoute } from '@angular/router';
import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { Toolbar } from './../../../../src/toolbar/toolbar';
import { FileUploader } from 'ng2-file-upload';
@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'uploaders',
    templateUrl: 'uploaders.component.html',
    styleUrls: [
        './uploaders.component.scss'
    ]
})
export class UploadersComponent implements OnInit {
    public toolBar: Toolbar = new Toolbar(
        {
            brand: {
                logo: '/assets/svg/ngx-canaima.svg'
            },
            title: this.route.snapshot.data['title'],
            customClass: 'navbar--primary navbar--subheader',
            fixed: true
        }
    );
    /* public uploader = new FileUploader({
        url: `${API_URL}/medias`,
        itemAlias: 'body'
    }); */
    constructor(
        private route: ActivatedRoute,
    ) { }

    public ngOnInit() { }
    /**
     * getActions
     */
    public getActions(item: any) {
        return [
            new Action({
                icon: 'upload',
                size: '24',
                callback: (data: any) => {
                    data.upload();
                }
            }),
            new Action({
                icon: 'delete',
                size: '24',
                callback: (data: any) => {
                    data.remove();
                }
            })
        ];
    }
}
