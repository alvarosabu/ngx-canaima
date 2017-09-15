
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NumberFormatterPipe } from './misc/number-formatter.pipe';

import { FormatService } from './misc/format.service';
import { NavbarModule } from './navbar/navbar.module';

import { HomeModule } from '../home/home.module';
import { CardsActivityModule } from '../cards/cards.module';
import { ListsActivityModule } from './../lists/lists.module';
import { FormsActivityModule } from '../forms/forms.module';
import { GridActivityModule } from './../grid/grid.module';
import { LayoutModule } from './../layout/layout.module';
import { NavService } from './navmenu/nav.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NavbarModule,
    HomeModule,
    CardsActivityModule,
    ListsActivityModule,
    FormsActivityModule,
    GridActivityModule,
    LayoutModule,

  ],
  declarations: [
    NumberFormatterPipe
  ],

  providers: [
    FormatService,
    NavService
  ],
  exports: [
    CommonModule,
    FormsModule,
    NavbarModule,
    HomeModule,
    CardsActivityModule,
    ListsActivityModule,
    FormsActivityModule,
    NumberFormatterPipe,
    GridActivityModule,
    LayoutModule,
  ]
})
export class CoreModule { }
