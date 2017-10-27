
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreviewModule } from '../preview/preview.module';

import { ListComponent } from './list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListItemIconComponent } from './list-item-icon/list-item-icon.component';
import { ListItemAvatarComponent } from './list-item-avatar/list-item-avatar.component';
import { ListItemCheckComponent } from './list-item-check/list-item-check.component';
import { ListItemPropertyComponent } from './list-item-property/list-item-property.component';
import { ListItemFileQeueComponent } from './list-item-fileqeue/list-item-fileqeue.component';

import { ButtonsModule } from '../buttons/buttons.module';

@NgModule({
    imports: [
        ButtonsModule,
        CommonModule,
        PreviewModule
    ],
    exports: [
        ListComponent,
        ListItemComponent,
        ListItemIconComponent,
        ListItemAvatarComponent,
        ListItemCheckComponent,
        ListItemFileQeueComponent,
        ListItemPropertyComponent
    ],
    declarations: [
        ListComponent,
        ListItemComponent,
        ListItemIconComponent,
        ListItemAvatarComponent,
        ListItemCheckComponent,
        ListItemFileQeueComponent,
        ListItemPropertyComponent
    ],
    providers: [],
})
export class ListsModule { }
