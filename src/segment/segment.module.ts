
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegmentComponent } from './segment.component';
import { TabsModule} from 'ngx-bootstrap';

@NgModule({
    imports: [
        TabsModule,
        CommonModule,
    ],
    exports: [
        SegmentComponent
    ],
    declarations: [
        SegmentComponent
    ],
    providers: [],
})
export class SegmentModule { }