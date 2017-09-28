import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoadingService {
  public isLoading: boolean;
  public loadingChange: Subject<boolean> = new Subject<boolean>();
  constructor() {
    this.loadingChange.subscribe((value) => {
      this.isLoading = value;
    });
  }
  public toggleLoading() {
    this.loadingChange.next(!this.isLoading);
  }

}
