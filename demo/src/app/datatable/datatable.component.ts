import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableField } from '../../../../src/index';
import { BalanceService } from './balance.service';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'datatable',
    templateUrl: 'datatable.component.html',
    styleUrls: [
        './datatable.component.scss'
    ]
})
export class DatatableActivityComponent implements OnInit {
    public navBar: any = {
        brand: {
            logo: '/assets/svg/ngx-canaima.svg'
        },
        title: this.route.snapshot.data['title']
    };
    public balanceList: any[] = [];
    public fields: TableField[] = [
        new TableField({
            key: 'media',
            alias: 'Media',
            type: 'img',
            ordenable: true,
            basis: 5,
            responsive: true
        }),
        new TableField({
            key: 'concept',
            alias: 'Concept',
            ordenable: true,
            basis: 15
        }),
        new TableField({
            key: 'amount',
            alias: 'Amount',
            ordenable: true,
            signColored: true
        }),
        new TableField({
            key: 'balance',
            alias: 'Balance',
            ordenable: true,
            unit: '€',
            customClass: 'data-table__column--bold'
        }),
        new TableField({
            key: 'date',
            alias: 'Date',
            ordenable: true,
            pipe: 'date',
            format: 'shortDate',
            responsive: true,
            customClass: 'data-table__column--secondary'
        })
    ];
    constructor(
        private balanceService: BalanceService,
        private route: ActivatedRoute,
    ) { }

    public ngOnInit() {
        this.getBalance();
    }
    /**
     * getBalance
     */
    public getBalance() {
        this.balanceService.getMockedBalance()
        .subscribe((res) => {
            this.balanceList = res;
        });
    }
}
