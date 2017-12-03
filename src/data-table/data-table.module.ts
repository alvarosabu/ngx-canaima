import { NgModule } from '@angular/core';
import {
  CommonModule,
  DatePipe
} from '@angular/common';
import { DataTableComponent } from './data-table.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
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