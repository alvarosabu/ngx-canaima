import { ToggleModule } from './../toggle/toggle.module';
import { CardToggleComponent } from './card-toggle/card-toggle.component';
import { MiscModule } from './../misc/misc.module';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardImageComponent } from './card-image/card-image.component';
import { CardBgComponent } from './card-bg/card-bg.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { CardDataComponent } from './card-data/card-data.component';
import { CardProfileComponent } from './card-profile/card-profile.component';
import { CardIllustrationComponent } from './card-illustration/card-illustration.component';
import { CardNumberComponent } from './card-number/card-number.component';
import { FabsModule } from '../fabs/fabs.module';
import { ButtonsModule } from '../buttons/buttons.module';
import { CountoModule } from 'angular2-counto';

@NgModule({
  imports: [
    ButtonsModule,
    ToggleModule,
    FabsModule,
    CommonModule,
    BsDropdownModule,
    CountoModule,
    MiscModule
  ],
  exports: [
    CommonModule,
    CardComponent,
    CardImageComponent,
    CardBgComponent,
    CardDataComponent,
    CardProfileComponent,
    CardIllustrationComponent,
    CardNumberComponent,
    CardToggleComponent
  ],
  declarations: [
    CardComponent,
    CardImageComponent,
    CardBgComponent,
    CardDataComponent,
    CardProfileComponent,
    CardIllustrationComponent,
    CardNumberComponent,
    CardToggleComponent
  ],
  providers: []
})
export class CardsModule { }
