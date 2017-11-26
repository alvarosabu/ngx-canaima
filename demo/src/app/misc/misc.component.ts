import { Action } from './../../../../src/action';
import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Toolbar } from './../../../../src/toolbar/toolbar';
import { Card } from './../../../../src/cards/card/card';
import { FormatCaseService } from '../../../../src/index';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'misc',
    templateUrl: 'misc.component.html',
    styleUrls: [
        './misc.component.scss'
    ]
})
export class MiscComponent implements OnInit {
    public toolBar: Toolbar = new Toolbar(
        {
            brand: {
                logo: '/assets/svg/ngx-canaima.svg'
            },
            title: this.route.snapshot.data['title'],
            customClass: 'navbar--primary navbar--subheader',
            fixed: true
        }
    );
    public snakeCaseList2 = [
        {
            id: 1,
            new_tools: [
                {
                    label: 'tool1',
                    ip_address: '192.168.12.15'
                },
                {
                    label: 'tool3',
                    ip_address: '192.168.12.15'
                }
            ]
        }
    ]
    public snakeCaseList = [
        {
            id: 1,
            name: 'Snake Case',
            route_url: {
                link: 'http://url.com',
                save_top: '123',
                sub_route_url: {
                    link: 'http://url.com',
                    save_top: '123'
                },
            },
            new_tools: [
                {
                    label_code: '1234',
                    ip: '192.168.12.34'
                },
                {
                    label_code: '5367',
                    ip: '192.168.56.90'
                },
                {
                    label_code: '4590',
                    ip: '192.168.30.210'
                }
            ],
            media: '../img/route'
        },
        {
            id: 2,
            name: 'Snake Case 2',
            route_url: {
                link: 'http://url.com',
                save_top: '123'
            },
            new_tools: [
                {
                    label_code: '1234',
                    ip: '192.168.12.34',
                    internal_leds: [
                        {
                            led_name: 'Led 1',
                            color: 'red'
                        }
                    ]
                },
                {
                    label_code: '5367',
                    ip: '192.168.56.90'
                },
                {
                    label_code: '4590',
                    ip: '192.168.30.210'
                }
            ],
            media: '../img/route'
        }
    ];
    public camelCaseList = [
        {
          id: 1,
          name: 'Snake Case',
          routeUrl: {
            link: 'http://url.com',
            saveTop: 123
          },
          newTools: [
            {
              labelCode: 1234,
              ip: '192.168.12.34'
            },
            {
              labelCode: 5367,
              ip: '192.168.56.90'
            },
            {
              labelCode: 4590,
              ip: '192.168.30.210'
            }
          ],
          media: '../img/route'
        },
        {
          id: 2,
          name: 'Snake Case 2',
          routeUrl: {
            link: 'http://url.com',
            saveTop: 123
          },
          newTools: [
            {
              labelCode: 1234,
              ip: '192.168.12.34',
              internalLeds: [
                {
                  ledName: 'Led 1',
                  color: 'red'
                }
              ]
            },
            {
              labelCode: 5367,
              ip: '192.168.56.90'
            },
            {
              labelCode: 4590,
              ip: '192.168.30.210'
            }
          ],
          media: '../img/route'
        }
      ]
      ;
    public snakeCaseToCamel: Card = new Card(
        {
            title: 'Snake case to Camel',
            actions: [
                new Action({
                    label: 'Convert to CamelCase',
                    color: 'primary',
                    callback: () => {
                        this.convertSnakeCamel();
                    }
                })
            ]
        }
    );
    public camelCaseToSnake: Card = new Card(
        {
            title: 'Snake case to Camel',
            actions: [
                new Action({
                    label: 'Convert to SnakeCase',
                    color: 'primary',
                    callback: () => {
                        this.convertCamelSnake();
                    }
                })
            ]
        }
    );
    public keyPipeObject: any = {
        ip: '192.168.1.123',
        groupId: 1,
        moteId: 23,
        temp: '23ºC',
        hum: '33%'
    };
    constructor(
        public formatCaseService: FormatCaseService,
        private route: ActivatedRoute,
    ) { }

    public ngOnInit() { }
    public convertSnakeCamel() {
        this.snakeCaseList = this.formatCaseService.listSnakeToCamel(this.snakeCaseList);
    }
    public convertCamelSnake() {
        this.camelCaseList = this.formatCaseService.listCamelToSnake(this.camelCaseList);
    }
}