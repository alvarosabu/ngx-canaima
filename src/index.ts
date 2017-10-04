import { MiscModule } from './misc/misc.module';


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
import { BadgesModule } from './badges/badges.module';
import { FabsModule } from './fabs/fabs.module';
import { AsModalModule } from './modals/modals.module';
import { SearchBarModule } from './search-bar/search-bar.module';
import { EmptyStateModule } from './empty-state/empty-state.module';
import { LoadingModule } from
'./loading/loading.module';
import { PreviewModule } from './preview/preview.module';
import { MediaUploaderModule } from './media-uploader/media-uploader.module';

export * from './action';
export * from './action-dropdown';
export * from './preview';
export * from './cards';
export * from './forms';
export * from './lists';
export * from './grid-list';
export * from './segment';
export * from './navmenu';
export * from './toolbar';
export * from './header';
export * from './chip';
export * from './badges';
export * from './fabs';
export * from './modals';
export * from './search-bar';
export * from './loading';
export * from './empty-state';
@NgModule({
  imports: [
    CommonModule,
    CardsModule,
    ListsModule,
    PreviewModule,
    DynamicFormsModule,
    GridListsModule,
    ToolbarModule,
    NavmenuModule,
    HeaderModule,
    SegmentModule,
    ButtonsModule,
    ChipModule,
    BadgesModule,
    FabsModule,
    AsModalModule,
    SearchBarModule,
    LoadingModule,
    EmptyStateModule,
    MediaUploaderModule,
    MiscModule
  ],
  declarations: [
    
  ],
  exports: [
    CardsModule,
    ListsModule,
    PreviewModule,
    DynamicFormsModule,
    GridListsModule,
    ToolbarModule,
    NavmenuModule,
    HeaderModule,
    SegmentModule,
    ButtonsModule,
    ChipModule,
    BadgesModule,
    FabsModule,
    AsModalModule,
    SearchBarModule,
    LoadingModule,
    EmptyStateModule,
    MediaUploaderModule,
    MiscModule
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
