
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsModule } from './cards/cards.module';
import { ListsModule } from './lists/lists.module';
import { GridListsModule } from './grid-list/grid-list.module';

import { DynamicFormsModule } from './forms/dynamic-forms/dynamic-forms.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { HeaderModule } from './header/header.module';
import { NavmenuModule } from './navmenu/navmenu.module';
import { SegmentModule } from './segment/segment.module';
import { ButtonsModule } from './buttons/buttons.module';
import { ChipModule } from './chip/chip.module';

export * from './action';
export * from './action-dropdown';
export * from './bg-image-preview.directive';
export * from './image-preview.directive';
export * from './cards';
export * from './forms';
export * from './lists';
export * from './grid-list';
export * from './segment';
export * from './navmenu';
export * from './toolbar';
export * from './header';
export * from './chip';

@NgModule({
  imports: [
    CommonModule,
    CardsModule,
    ListsModule,
    DynamicFormsModule,
    GridListsModule,
    ToolbarModule,
    NavmenuModule,
    HeaderModule,
    SegmentModule,
    ButtonsModule,
    ChipModule
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
    HeaderModule,
    SegmentModule,
    ButtonsModule,
    ChipModule
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
