import {
    Component,
    OnInit,
    ViewEncapsulation,
    Inject
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageScrollInstance, PageScrollService, PageScrollConfig } from 'ng2-page-scroll';
import { DOCUMENT } from '@angular/common';
import { NavService } from './../navmenu/nav.service';
import { Toolbar } from './../../../../../src/toolbar/toolbar';
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
        private pageScrollService: PageScrollService,
        private menu: ToolbarMenuService,
        @Inject(DOCUMENT) private document: any,
        private menuService: ToolbarMenuService,
        private navService: NavService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    public ngOnInit() {
        PageScrollConfig.defaultDuration = 300;
        this.menuService.openMenu$
        .subscribe((e) => {
            this.menuOpen = e;
        });
        this.router.events.subscribe((path: any) => {
            this.menuOpen = false;
            if (path.url) {
              this.routeData = this.router.config.filter((route) => {
                return route.path === path.url.replace('/', '');
            })[0];
            }
            if (this.routeData && this.routeData.data) {
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
     * selectedNav
     */
    public selectedNav(nav: Nav) {
        if (nav.anchor) {
            // tslint:disable-next-line:max-line-length
            const pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, `#${nav.slugName}`);
            this.pageScrollService.start(pageScrollInstance);
            this.toggleMenu();
        } else {
            this.router.navigate([`/${nav.slugName}`]);
        }
    }
    /**
     * toggleMenu
     */
    public toggleMenu() {
        this.menuOpen = !this.menuOpen;

        this.menu.openMenu(false);
    }
}
