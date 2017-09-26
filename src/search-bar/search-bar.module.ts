import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    exports: [
        SearchBarComponent
    ],
    declarations: [
        SearchBarComponent,
    ],
    providers: [],
})
export class SearchBarModule { }
