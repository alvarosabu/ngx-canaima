import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NumberFormatterPipe } from './misc/number-formatter.pipe';

import { NotesService } from './note/notes.service';
import { FormatService } from './misc/format.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    NumberFormatterPipe
  ],

  providers: [
    NotesService,
    FormatService,
  ],
  exports: [
    CommonModule,
    FormsModule,
    NumberFormatterPipe,
  ]
})
export class CoreModule { }
