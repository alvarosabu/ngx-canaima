import { OnInit } from '@angular/core';
import { Action } from './../../action';
export declare class CardDataComponent implements OnInit {
    img: string;
    title: string;
    subtitle: string;
    actions: Action[];
    shadow: [any];
    customClass: string;
    hover: boolean;
    ngOnInit(): void;
}
