
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsModule } from './cards/cards.module';
import { ListsModule } from './lists/lists.module';
import { GridListsModule } from './grid-list/grid-list.module';

import { DynamicFormsModule } from './forms/dynamic-forms/dynamic-forms.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { HeaderModule } from './header/header.module';
import { NavmenuModule } from './navmenu/navmenu.module';
import { BgImagePreviewDirective } from './bg-image-preview.directive';
import { ImagePreviewDirective } from './image-preview.directive';

export * from './action';
export * from './cards';
export * from './forms';
export * from './lists';
export * from './grid-list';

@NgModule({
  imports: [
    CommonModule,
    CardsModule,
    ListsModule,
    DynamicFormsModule,
    GridListsModule,
    ToolbarModule,
    NavmenuModule,
    HeaderModule
  ],
  declarations: [

  ],
  exports: [
    CardsModule,
    ListsModule,
    DynamicFormsModule,
    GridListsModule,
    ToolbarModule,
    NavmenuModule,
    HeaderModule
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
