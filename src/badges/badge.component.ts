import {
    Component,
    OnInit,
    Input,
    ViewEncapsulation
} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'as-badge',
    templateUrl: 'badge.component.html',
    styleUrls: [
        './badge.component.scss'
    ]
})
export class BadgeComponent implements OnInit {
    public style: any = {};
    @Input('icon') public icon: string;
    @Input('prefix') public prefix = 'mdi';
    @Input('size') public size = 'md';
    @Input('badge') public badge = 'default';
    @Input('badgeIcon') public badgeIcon: string;
    @Input('customClass') public customClass: string;
    @Input('count') public count: any;
    @Input('position') public position: any;
    @Input('color') public color = 'plain';
    @Input('outline') public outline;
    @Input('rounded') public rounded;
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
            this.style[h] = 0;
            this.style[w] = 0;
        }else {
            this.style = {
                top: 0,
                right: 0
            };
        }
    }
    /**
     * getPos
     */
    public getPos() {
        return this.style;
    }
}
