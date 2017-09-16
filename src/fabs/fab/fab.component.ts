import {
    Component,
    OnInit,
    ViewEncapsulation,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
@Component({
    selector: 'as-fab',
    templateUrl: 'fab.component.html',
    styleUrls: [
        '../fabs.component.scss'
    ]
})
export class FabComponent implements OnInit {
    @Input('callback') public callback: any;
    @Input('icon') public icon: string;
    @Input('iconActive') public iconActive: string;
    @Input('size') public size = 'md';
    @Input('prefix') public prefix = 'mdi';
    @Input('customClass') public customClass: string;
    @Input('position') public position = 'bottom right';
    @Input('color') public color = 'primary';
    @Input('outline') public outline: boolean;
    // Circle
    @Input('bg') public bg: boolean;
    @Input('menu') public menu: any;
    public active= false;
    public style: any = {};
    constructor() { }

    public ngOnInit() {
        let h;
        let w;
        if (this.position) {
            const positions = this.position.split(' ');
            for (const pos of positions) {
                if ((pos === 'top' || pos === 'bottom') && !h) {
                    h = pos;
                }else if ((pos === 'left' || pos === 'right') && !w) {
                    w = pos;
                }else if (w && h) {
                    break;
                }
            }
            this.style[h] = '2rem';
            this.style[w] = '2rem';
        }else {
            this.style = {
                bottom: '2rem',
                right: '2rem'
            };
        }
    }
    /**
     * getPos
     */
    public getPos() {
        return this.style;
    }
    public openCircle() {
        this.active = !this.active;
    }
}
