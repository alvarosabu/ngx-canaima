import { ButtonsModule } from './../buttons/buttons.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardImageComponent } from './card-image/card-image.component';
import { CardBgComponent } from './card-bg/card-bg.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { CardDataComponent } from './card-data/card-data.component';
import { CardProfileComponent } from './card-profile/card-profile.component';
import { CardIllustrationComponent } from './card-illustration/card-illustration.component';

@NgModule({
  imports: [
    ButtonsModule,
    CommonModule,
    BsDropdownModule
  ],
  exports: [
    CommonModule,
    CardComponent,
    CardImageComponent,
    CardBgComponent,
    CardDataComponent,
    CardProfileComponent,
    CardIllustrationComponent
  ],
  declarations: [
    CardComponent,
    CardImageComponent,
    CardBgComponent,
    CardDataComponent,
    CardProfileComponent,
    CardIllustrationComponent
  ],
  providers: []
})
export class CardsModule { }
