
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardImageComponent } from './card-image/card-image.component';
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule
  ],
  exports: [
    CommonModule,
    CardComponent,
    CardImageComponent
  ],
  declarations: [
    CardComponent,
    CardImageComponent
  ],
  providers: []
})
export class CardsModule { }
