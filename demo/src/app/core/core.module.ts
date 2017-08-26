
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NumberFormatterPipe } from './misc/number-formatter.pipe';

import { FormatService } from './misc/format.service';
import { HomeModule } from '../home/home.module';
import { CardsActivityModule } from '../cards/cards.module';
import { FormsActivityModule } from '../forms/forms.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeModule,
    CardsActivityModule,
    FormsActivityModule

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
    FormsActivityModule,
    NumberFormatterPipe,
  ]
})
export class CoreModule { }
