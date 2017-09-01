import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsModule } from './cards/cards.module';
import { DynamicFormsModule } from './forms/dynamic-forms/dynamic-forms.module';

export * from './action';
export * from './cards';

@NgModule({
  imports: [
    CommonModule,
    CardsModule,
    DynamicFormsModule
  ],
  declarations: [
  ],
  exports: [
    CardsModule,
    DynamicFormsModule
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
