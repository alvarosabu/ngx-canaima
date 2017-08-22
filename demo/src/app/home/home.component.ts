import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { NotesService } from './../core/note/notes.service';
import { Note } from '../core/note/note';
import { ToastyService } from 'ng2-toasty';

@Component({
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'home.component.html',
    styleUrls: [
        './home.component.scss'
    ]
})
export class HomeComponent implements OnInit {

    public openDropdown: boolean = false;
    public navBar: any = {
        brand: {
            logo: '/assets/img/logo.png'
        }
    };
    public cardSimple = {
        title: 'Simple Card',
        subtitle: 'Waaaa subtitle',
        msg: `Venmo banjo semiotics, scenester hexagon beard schlitz` +
        `chic flannel coloring book portland kickstarter.`,
        actions: [
          {
            label: 'Action 1',
            icon: null,
            callback: () => {
              console.log('Simple action1');
            }
          },
          {
            label: 'Action 2',
            icon: null,
            callback: () => {
              console.log('Simple action2');
            }
          }
        ],
        optionsLeft: [
          {
            icon: 'chevron-left',
            callback: () => {
              console.log('Back');
            }
          }
        ],
        optionsRight: [
          {
            icon: 'dots-vertical',
            prefix: 'mdi',
            dropdown: [
                {
                    label: 'Action 1',
                    icon: 'account',
                    callback: () => {
                      console.log('Simple action1');
                    }
                },
                {
                    label: 'Action 2',
                    icon: null,
                    callback: () => {
                      console.log('Simple action2');
                    }
                },
            ]
          },
          {
            icon: 'filter',
            prefix: 'mdi',
            callback: () => {
              console.log('Filter');
            },
          }
        ]
      };
    constructor(
        public toastService: ToastyService
    ) {}

    public ngOnInit() {
      
    }

}
