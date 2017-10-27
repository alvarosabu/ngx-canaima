import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'as-spacer',
    template: `<div class="spacer spacer--{{size}}"></div>`
})

export class SpacerComponent implements OnInit {
    @Input('size') public size = 'sm';
    constructor() { }

    ngOnInit() {
        
    }
}