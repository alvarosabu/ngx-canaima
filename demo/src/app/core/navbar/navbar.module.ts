
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import { NgxCanaimaModule } from './../../../../../src/index';

@NgModule({
    imports: [
        NgxCanaimaModule,
        FormsModule,
        CommonModule,
        RouterModule
    ],
    exports: [
        NavbarComponent
    ],
    declarations: [
        NavbarComponent,
    ],
    providers: [],
})
export class NavbarModule { }
