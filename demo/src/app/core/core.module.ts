
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NumberFormatterPipe } from './misc/number-formatter.pipe';

import { FormatService } from './misc/format.service';
import { HomeModule } from '../home/home.module';
import { CardsActivityModule } from '../cards/cards.module';
import { ListsActivityModule } from './../lists/lists.module';
import { FormsActivityModule } from '../forms/forms.module';
import { GridActivityModule } from './../grid/grid.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeModule,
    CardsActivityModule,
    ListsActivityModule,
    FormsActivityModule,
    GridActivityModule

  ],
  declarations: [
    NumberFormatterPipe
  ],

  providers: [
    FormatService,
  ],
  exports: [
    CommonModule,
    FormsModule,
    HomeModule,
    CardsActivityModule,
    ListsActivityModule,
    FormsActivityModule,
    NumberFormatterPipe,
    GridActivityModule
  ]
})
export class CoreModule { }
