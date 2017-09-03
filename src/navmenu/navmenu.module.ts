import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavmenuComponent } from './navmenu.component';


@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        NavmenuComponent
    ],
    declarations: [
        NavmenuComponent
    ],
    providers: [],
})
export class NavmenuModule { }