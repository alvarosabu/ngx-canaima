
import { ActivatedRoute } from '@angular/router';
import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { Toolbar } from './../../../../src/toolbar/toolbar';
import { FileUploader, FileUploaderOptions } from 'ng2-file-upload';
import { MediaUploaderService } from '../../../../src/media-uploader/media-uploader.service';
import { ActionDropdown } from './../../../../src/action-dropdown';
import { Card } from './../../../../src/cards/card/card';
import { Action } from './../../../../src/action';
@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'uploaders',
    templateUrl: 'uploaders.component.html',
    styleUrls: [
        './uploaders.component.scss'
    ]
})
export class UploadersComponent implements OnInit {
    public mediaUploader: any;
    public fileUploader: any;
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
    public queueCard: Card = new Card(
        {
            optionsRight: [
                new Action({
                    callback: () => {
                        this.mediaUploaderService.uploadAll();
                    },
                    icon: 'cloud-upload'
                }),
                new Action({
                    callback: () => {
                        this.mediaUploaderService.clearQueue();
                    },
                    icon: 'delete'
                })
            ]
        }
    );
    constructor(
        public mediaUploaderService: MediaUploaderService,
        public fileUploaderService: MediaUploaderService,
        private route: ActivatedRoute,
    ) { }

    public ngOnInit() {
        this.mediaUploader = this.mediaUploaderService.config();
        this.fileUploader = this.fileUploaderService.config(
            {
                url: 'asdasdas',
                itemAlias: 'body',
                allowedMimeType: ['application/pdf']
            }
        );
    }
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
