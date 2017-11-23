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
            key: 'concept',
            alias: 'Concept',
            ordenable: true,
            basis: 15,
            customClass: 'data-table__column--bold'
        }),
        new TableField({
            key: 'amount',
            alias: 'Amount',
            ordenable: true,
            customClass: 'data-table__column--bold'
        }),
        new TableField({
            key: 'balance',
            alias: 'Balance',
            ordenable: true,
            unit: '€',
            customClass: 'data-table__column--bold'
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
