import { NgModule } from '@angular/core';
import {
  CommonModule,
  DatePipe
} from '@angular/common';
import { DataTableComponent } from './data-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DataTableComponent
  ],
  providers: [
    DatePipe
  ],
  exports: [
    DataTableComponent
  ]
})
export class DataTableModule { }