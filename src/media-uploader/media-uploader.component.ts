import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    ViewEncapsulation,
    OnChanges,
    AfterViewInit,
    SimpleChanges
} from '@angular/core';

import {
    FileUploader,
    FileItem,
    FileSelectDirective,
    FileDropDirective,
    FileUploaderOptions
} from 'ng2-file-upload';
import { MediaUploaderService } from './media-uploader.service';
declare var API_URL: string;
@Component({
    selector: 'media-uploader',
    templateUrl: 'media-uploader.component.html'
})
export class MediaUploaderComponent implements OnInit, OnChanges, AfterViewInit {
    @Input('image') public image;
    @Input('customClass') public customClass;
    @Input('prefix') public prefix = 'mdi';
    @Input('icon') public icon = 'image';
    @Input('multiple') public multiple = false;
    @Input('config') public config?: FileUploaderOptions = {
      url: 'http://localhost:5678/api/medias/upload',
      itemAlias: 'asmedia'
    };
    @Input('uploader') public uploader: FileUploader;
    @Output() public uploaderChange = new EventEmitter<FileUploader>();
    @Output() public onQueue = new EventEmitter<any>();
    
    public hasBaseDropZoneOver = false;

    constructor(
      public mediaUploaderService: MediaUploaderService,
    ) {
      this.mediaUploaderService.config(
        this.config
      );
    }
    public ngOnInit() {
      this.uploader = this.mediaUploaderService.uploader;
      setTimeout(() => {
        if (this.uploader === undefined || this.uploader) {
          this.uploader = new FileUploader(this.config);
          this.uploader.onAfterAddingFile = (fileItem) => {
            this.onQueue.emit(fileItem);
            fileItem.withCredentials = false;
          };
        }
        this.uploaderChange.emit(this.uploader);
      }, 500);
    }
    public ngAfterViewInit() {
      /* this.uploader = new FileUploader({
        url: `${API_URL}/medias`,
        itemAlias: 'body'
      }); */
      

    }
    public ngOnChanges(changes: SimpleChanges) {
      /* console.log(changes)
      if (changes.deuploader.previousValue === undefined) {
        this.deuploaderChange.emit(this.uploader);
      } */
    }
    public fileOverBase(e: any): void {
      this.hasBaseDropZoneOver = e;
    }
}
