import {
    Component,
    OnInit,
    Input,
    Output,
    ViewEncapsulation,
    EventEmitter
} from '@angular/core';
import * as _ from 'lodash';
@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'as-search-bar',
    templateUrl: 'search-bar.component.html'
})
export class SearchBarComponent implements OnInit {
    @Input('prefix') public prefix = 'mdi';
    @Input('icon') public icon = 'magnify';
    @Input('placeholder') public placeholder = 'Search';
    @Input('customClass') public customClass: string;
    @Output() public onSearch = new EventEmitter();
    public search;
    private debounceSearch = _.debounce(
        (e) => {
             this.onSearch.emit(this.search);
        },
        1000
    );
    // tslint:disable-next-line:no-empty
    constructor() { }

    // tslint:disable-next-line:no-empty
    public ngOnInit() { }
    /**
     * onSearch
     */
    public searchTerm(e) {
        this.debounceSearch(e);
    }
}
