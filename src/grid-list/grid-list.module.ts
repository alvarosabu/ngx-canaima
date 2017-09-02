import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridListComponent } from './grid-list.component';
import { GridListItemComponent } from './grid-list-item/grid-list-item.component';


@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        GridListComponent,
        GridListItemComponent,
    ],
    declarations: [
        GridListComponent,
        GridListItemComponent,
    ],
    providers: [],
})
export class GridListsModule { }
