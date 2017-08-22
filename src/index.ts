
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsModule } from './cards/cards.module';

export * from './cards/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    CardsModule
  ],
  declarations: [
  ],
  exports: [
    CardsModule,
  ]
})
export class NgxCanaimaModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxCanaimaModule,
      providers: []
    };
  }
}
