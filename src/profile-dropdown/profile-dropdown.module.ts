import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap';
import { NgModule } from '@angular/core';

import { ProfileDropdownComponent } from './profile-dropdown.component';

@NgModule({
    imports: [
        CommonModule,
        BsDropdownModule
    ],
    exports: [
        ProfileDropdownComponent
    ],
    declarations: [
        ProfileDropdownComponent
    ],
    providers: [],
})
export class ProfileDropdownModule { }
