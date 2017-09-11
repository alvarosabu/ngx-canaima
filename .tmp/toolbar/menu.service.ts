
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ToolbarMenuService {

    public openMenuSrc = new Subject<boolean>();
    public openMenu$ = this.openMenuSrc.asObservable();
    constructor(
    ) {

    }

    /**
     * Init Service
     *
     * @memberof NavService
     */
    public init() {
    }
    public openMenu(open: boolean) {
        this.openMenuSrc.next(open);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }
}
