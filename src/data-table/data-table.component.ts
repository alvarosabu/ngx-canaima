import {
    Component,
    OnInit,
    Input,
    Output,
    OnChanges,
    SimpleChanges,
    ViewEncapsulation
} from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'as-data-table',
    templateUrl: 'data-table.component.html'
})
export class DataTableComponent implements OnChanges {
    @Input('headers') public headers: any[];
    @Input('data') public data: any[];
    @Input('height') public height: string;
    @Input('scroll') public scroll: string;
    @Input('customClass') public customClass: string;
    constructor(
       private datePipe: DatePipe
    ) { }

    public ngOnChanges(changes: SimpleChanges) {
        const data = changes.data.currentValue;
        console.log('Data', data );
        if (data) {
            this.headers.forEach((header) => {
                if (header.pipe === 'date') {
                    data
                    .map((obj: any) => {
                        obj[header.key] = this.datePipe.transform(obj[header.key], header.format);
                    });
                }
            });
        }
    }
    /**
     * sortBy
     */
    public sortBy(head) {
        if (head.sort === undefined) {
            this.headers
            .map((obj: any) => {
                delete obj.sort;
            });
        }
        let order = 1;
        const key = head.key;
        head.sort = head.sort || true;
        head.order = !head.order;
        if (!head.order) {
            order = -1;
        }
        this.data.sort((a, b) => {
            if (a[key] < b[key]) {
                return order;
            }else if (a[key] > b[key]) {
                return -order;
            }else {
                return 0;
            }
        });
    }
    /**
     * checkSignColor
     */
    public checkSignClass(val) {
        if (val > 0) {
            return 'data-table__column--balanced';
        } else if (val === 0) {
            return 'data-table__column--secondary';
        } else {
            return 'data-table__column--assertive';
        }
    }
}
