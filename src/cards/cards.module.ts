

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardImageComponent } from './card-image/card-image.component';
import { CardBgComponent } from './card-bg/card-bg.component';
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule
  ],
  exports: [
    CommonModule,
    CardComponent,
    CardImageComponent,
    CardBgComponent
  ],
  declarations: [
    CardComponent,
    CardImageComponent,
    CardBgComponent
  ],
  providers: []
})
export class CardsModule { }
