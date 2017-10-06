import { BsDropdownModule } from 'ngx-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { BackButtonComponent } from './back-button.component';
import { ToolbarMenuService } from './menu.service';
@NgModule({
    imports: [
        BsDropdownModule,
        CommonModule,
        FlexLayoutModule
    ],
    exports: [
        BackButtonComponent,
        ToolbarComponent,
    ],
    declarations: [
        BackButtonComponent,
        ToolbarComponent,
    ],
    providers: [
        ToolbarMenuService
    ],
})
export class ToolbarModule { }
