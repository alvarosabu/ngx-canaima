import { Toolbar } from './../../../../../src/toolbar/toolbar';
import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavService } from './../navmenu/nav.service';
import { ToolbarMenuService } from './../../../../../src/toolbar/menu.service';
import { Nav } from './../../../../../src/navmenu/nav';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'navbar',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent implements OnInit {
    public menuOpen: boolean;
    public routeData: any;
    public toolBar: Toolbar = new Toolbar(
        {
            brand: {
                logo: '/assets/svg/ngx-canaima.svg'
            },
            customClass: 'navbar--primary navbar--subheader',
            fixed: true
        }
    );
    public navList: Nav[] = [];
    constructor(
        private menuService: ToolbarMenuService,
        private navService: NavService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    public ngOnInit() {
        this.menuService.openMenu$
        .subscribe((e) => {
            this.menuOpen = e;
        });
        this.router.events.subscribe((path: any) => {
            this.routeData = this.router.config.filter((route) => {
                return route.path === path.url.replace('/', '');
            })[0];
            if (this.routeData.data) {
                this.toolBar.title = this.routeData.data.title;
            }
        });
        this.getNavs();
    }
    /**
     * getNavs
     */
    public getNavs() {
        this.navService.getNavs()
        .subscribe((navList: Nav[]) => {
            this.navList = navList;
        });
    }
    /**
     * toggleMenu
     */
    public toggleMenu() {
        
    }
}
