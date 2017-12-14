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
import { DataTableModule } from './data-table/data-table.module';
import { ProfileDropdownModule } from './profile-dropdown/profile-dropdown.module';
import { ContentPlaceholderModule } from './content-placeholder/content-placeholder.module';
import { MiscModule } from './misc/misc.module';
import { FileButtonModule } from './file-button/file-button.module';

export * from './action';
export * from './action-dropdown';
export * from './preview/index';
export * from './cards/index';
export * from './forms/index';
export * from './lists/index';
export * from './grid-list/index';
export * from './segment/index';
export * from './navmenu/index';
export * from './toolbar/index';
export * from './header/index';
export * from './chip/index';
export * from './badges/index';
export * from './fabs/index';
export * from './modals/index';
export * from './search-bar/index';
export * from './loading/index';
export * from './empty-state/index';
export * from './misc/index';
export * from './profile-dropdown/index';
export * from './validation';
export * from './toggle/index';
export * from './media-uploader/index';
export * from './file-button/index';
export * from './data-table/index';

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
    FileButtonModule,
    MiscModule,
    ContentPlaceholderModule,
    ProfileDropdownModule,
    DataTableModule
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
    FileButtonModule,
    MiscModule,
    ContentPlaceholderModule,
    ProfileDropdownModule,
    DataTableModule
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
