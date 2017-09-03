import { BsDropdownModule } from 'ngx-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { ToolbarMenuService } from './menu.service';
@NgModule({
    imports: [
        BsDropdownModule,
        CommonModule,
        FlexLayoutModule
    ],
    exports: [
        ToolbarComponent,
    ],
    declarations: [
        ToolbarComponent,
    ],
    providers: [
        ToolbarMenuService
    ],
})
export class ToolbarModule { }