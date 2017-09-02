
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListItemIconComponent } from './list-item-icon/list-item-icon.component';
import { ListItemAvatarComponent } from './list-item-avatar/list-item-avatar.component';
import { ListItemCheckComponent } from './list-item-check/list-item-check.component';
import { ListItemPropertyComponent } from './list-item-property/list-item-property.component';
import { ListItemFileQeueComponent } from './list-item-fileqeue/list-item-fileqeue.component';
import { BgImagePreviewDirective } from './../bg-image-preview.directive';
import { ImagePreviewDirective } from './../image-preview.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        ListComponent,
        ListItemComponent,
        ListItemIconComponent,
        ListItemAvatarComponent,
        ListItemCheckComponent,
        ListItemFileQeueComponent,
        ListItemPropertyComponent,
        BgImagePreviewDirective,
        ImagePreviewDirective
    ],
    declarations: [
        ListComponent,
        ListItemComponent,
        ListItemIconComponent,
        ListItemAvatarComponent,
        ListItemCheckComponent,
        ListItemFileQeueComponent,
        ListItemPropertyComponent,
        BgImagePreviewDirective,
        ImagePreviewDirective
    ],
    providers: [],
})
export class ListsModule { }
