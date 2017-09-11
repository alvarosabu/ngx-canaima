import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'layout',
    template: "<div class=\"container-fluid has-navbar\"> <div class=\"frow\"> <div class=\"fcol-xs\"> <div class=\"box\"> </div> </div> </div> </div>",
    styles: [""]
})
export class LayoutComponent implements OnInit {
    constructor() { }

    public ngOnInit() { }
}