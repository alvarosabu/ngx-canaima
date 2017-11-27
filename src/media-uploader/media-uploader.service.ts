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
import { FileUploaderOptions } from 'ng2-file-upload/ng2-file-upload';
declare var API_URL: string;
@Injectable()
export class MediaUploaderService {
    public uploader: FileUploader;
    public apiUrl: string;
    constructor() {
        //
    }
    public config(config?: FileUploaderOptions) {
        if (config) {
            this.uploader = new FileUploader(config);
        } else {
          const uploadApi = `${API_URL}/medias`;
          this.uploader = new FileUploader({
              url: uploadApi,
              itemAlias: 'body',
          });
        }
        return this.uploader;
    }
    public getCurrentUploader() {
        return this.uploader;
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
    public uploadAll() {
        const complete = new Observable((observer) => {
            observer.next();
            this.uploader.onCompleteAll = (() => {
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
        this.uploader.uploadAll();
        return complete
    }
    public clearQueue() {
        this.uploader.clearQueue();
    }
}
