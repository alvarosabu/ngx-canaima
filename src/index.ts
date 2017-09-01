

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsModule } from './cards/cards.module';
import { ListsModule } from './lists/lists.module';
import { DynamicFormsModule } from './forms/dynamic-forms/dynamic-forms.module';
import { BgImagePreviewDirective } from './bg-image-preview.directive';
import { ImagePreviewDirective } from './image-preview.directive';

export * from './action';
export * from './cards';
export * from './forms';
export * from './lists';

@NgModule({
  imports: [
    CommonModule,
    CardsModule,
    ListsModule,
    DynamicFormsModule
  ],
  declarations: [
    ImagePreviewDirective,
    BgImagePreviewDirective
  ],
  exports: [
    CardsModule,
    ListsModule,
    DynamicFormsModule,
    ImagePreviewDirective,
    BgImagePreviewDirective
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
