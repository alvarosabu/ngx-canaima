import { Injectable } from '@angular/core';
import {
    Http,
    Headers,
    Response,
    XHRBackend
} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {
    Observable,
    BehaviorSubject,
    Subject
} from 'rxjs';
import { AuthHttp } from 'angular2-jwt';
import {
    TranslateService,
    TranslatePipe
} from '@ngx-translate/core';
import * as moment from 'moment';
import { FormatService } from '../core/misc/format.service';
@Injectable()
export class BalanceService {
    public pagination: any = {
        next_page_url: 'cms/balance'
    };
    public balance: any;
    public balanceList: any[] = [
        {
            id: 1,
            concept: 'Descuento concepto 1',
            amount: 300,
            balance: 53.760,
            date: new Date(),
            media: 'https://cdn.sparkfun.com//assets/parts/6/3/4/3/11021-01.jpg'
        },
        {
            id: 2,
            concept: 'Descuento concepto 2',
            amount: -150,
            balance: 12.30,
            date: new Date(),
            media: 'https://cdn.sparkfun.com//assets/parts/6/3/4/3/11021-01.jpg'
        },
        {
            id: 3,
            concept: 'Descuento concepto 3',
            amount: 450,
            balance: 153.760,
            date: new Date(),
            media: 'https://cdn.sparkfun.com//assets/parts/6/3/4/3/11021-01.jpg'
        }
    ];
    constructor(
        private formatService: FormatService,
    ) {

    }

    public getMockedBalance() {
        return Observable.of(this.balanceList);
    }
}
