import {
    Injectable
} from '@angular/core';
import {
    Observable
} from 'rxjs/Observable';
import {
    FileUploader,
    FileItem
} from 'ng2-file-upload';

@Injectable()
export class MediaUploaderService {
    public uploader: FileUploader;
    public apiUrl: string;
    constructor() {
        //
    }
    public uploadMedia(fileItem: FileItem) {
        const complete = new Observable((observer) => {
            observer.next();
            fileItem.onComplete = (
                response: string,
                status: number,
                headers: any) => {
                observer.next({
                    url: JSON.parse(response).data.url,
                    id: JSON.parse(response).data.id
                });
            };
        });
        fileItem.upload();
        return complete
    }
    public uploadAll(uploader: FileUploader) {
        const complete = new Observable((observer) => {
            observer.next();
            uploader.onCompleteAll = (() => {
                observer.next();
            })
            /* uploader.onCompleteAll.onComplete = (
                response: string,
                status: number,
                headers: any) => {
                observer.next({
                    url: JSON.parse(response).data.url,
                    id: JSON.parse(response).data.id
                });
            }; */
        });
        uploader.uploadAll();
        return complete
    }
}
