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
declare var API_URL: string;
@Component({
    selector: 'file-button',
    templateUrl: 'file-button.component.html'
})
export class FileButtonComponent implements OnInit, OnChanges, AfterViewInit {
    @Input('media') public media;
    @Input('customClass') public customClass;
    @Input('prefix') public prefix = 'mdi';
    @Input('icon') public icon = 'paperclip';
    @Input('color') public color = 'primary';
    @Input('size') public size;
    @Input('outline') public outline = false;
    @Input('rounded') public rounded = false;
    @Input('block') public block = false;
    @Input('multiple') public multiple = false;
    /* @Input('config') public config?: FileUploaderOptions = {
      url: `${API_URL}/medias`,
      itemAlias: 'body'
    }; */
    @Input('uploader') public uploader: FileUploader;
    @Output() public uploaderChange = new EventEmitter<FileUploader>();
    @Output() public onQueue = new EventEmitter<any>();

    constructor() {
    }
    public ngOnInit() {
      setTimeout(() => {
        console.log(' Init ', this.uploader);
        /* if (this.uploader === undefined || this.uploader) {
          /* this.uploader = new FileUploader(this.config); 
          this.uploader.onAfterAddingFile = (fileItem) => {
            this.onQueue.emit(fileItem);
            fileItem.withCredentials = false;
          };
          this.mediaUploaderService.uploader = this.uploader;
        }
        this.uploaderChange.emit(this.uploader); */
      });
    }
    public ngAfterViewInit() {
      /* this.uploader = new FileUploader({
        url: `${API_URL}/medias`,
        itemAlias: 'body'
      }); */
    }
    public ngOnChanges(changes: SimpleChanges) {
      console.log(' Changes ', changes);
      /* console.log(changes)
      if (changes.deuploader.previousValue === undefined) {
        this.deuploaderChange.emit(this.uploader);
      } */
    }
    /**
     * removeAll
     */
    public removeAll(queue) {
      queue.forEach(file => {
        file.remove();
      });
    }
    /**
     * checkFileType
     */
    public checkFileType(file) {
      if (file) {
        let type = file.type.split('/')[0];
        return type;
      }
    }
    /**
     * checkMimeType
     */
    public checkMimeType(file) {
      if (file) {
        let mime = file.type.split('/')[1];
        return mime;
      }
    }
}
