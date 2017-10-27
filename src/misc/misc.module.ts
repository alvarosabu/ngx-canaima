
import { NgModule } from '@angular/core';
import { NumberSiPrefixPipe } from './number-si-prefix.pipe';
import { FormatCaseService } from './format-case.service';
import { SpacerComponent } from './spacer/spacer.component';

@NgModule({
    imports: [],
    exports: [
        NumberSiPrefixPipe,
        SpacerComponent
    ],
    declarations: [
        NumberSiPrefixPipe,
        SpacerComponent
    ],
    providers: [
        FormatCaseService
    ],
})
export class MiscModule { }
