import { NavService } from './core/navmenu/nav.service';

/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  AfterViewInit,
  ViewEncapsulation,
  AnimationTransitionEvent,
  ElementRef,
  ViewChildren,
  QueryList
} from '@angular/core';
import {
    ToastyService,
    ToastyConfig,
    ToastOptions,
    ToastData
} from 'ng2-toasty';
import {
  Location
} from '@angular/common';
import {
  Router, ActivatedRoute
} from '@angular/router';
import { AppState } from './app.service';
import { Nav } from './../../../src/navmenu/nav';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss'
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {
  @ViewChildren('pageContent', { read: ElementRef }) public elements: QueryList<any>;
  constructor(
    private router: Router,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
  ) {
    this.toastyConfig.theme = 'material';

  }
  public ngAfterViewInit() {
    this.router.events.subscribe((path: any) => {
        this.toolbarCheck();
    });
  }
  public toolbarCheck() {
    setTimeout(() => {
      console.log(this.elements);
      this.elements.forEach((element) => {
        const toolbars = element.nativeElement.getElementsByClassName('toolbar');
        console.log(toolbars);
        if (toolbars.length > 1) {
          toolbars[0].hidden = true;
        }else {
          toolbars[0].hidden = false;
        }
      });
     }, 1);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
