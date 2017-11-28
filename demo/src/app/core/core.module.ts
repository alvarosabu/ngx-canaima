import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormatService } from './misc/format.service';
import { NavbarModule } from './navbar/navbar.module';

import { HomeModule } from '../home/home.module';
import { CardsActivityModule } from '../cards/cards.module';
import { ListsActivityModule } from './../lists/lists.module';
import { FormsActivityModule } from '../forms/forms.module';
import { GridActivityModule } from './../grid/grid.module';
import { LayoutModule } from './../layout/layout.module';
import { NavService } from './navmenu/nav.service';
import { ModalsActivityModule } from '../modals/modals.module';
import { UploadersModule } from '../uploaders/uploaders.module';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { MiscActivityModule } from './../misc/misc.module';
import { DatatableActivityModule } from '../datatable/datatable.module';

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
    DatatableActivityModule,
    LayoutModule,
    ModalsActivityModule,
    UploadersModule,
    Ng2PageScrollModule,
    MiscActivityModule
  ],
  declarations: [
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
    GridActivityModule,
    DatatableActivityModule,
    LayoutModule,
    ModalsActivityModule,
    UploadersModule,
    Ng2PageScrollModule,
    MiscActivityModule
  ]
})
export class CoreModule { }
