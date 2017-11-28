
import { NgModule } from '@angular/core';
import { NumberSiPrefixPipe } from './number-si-prefix.pipe';
import { FormatCaseService } from './format-case.service';
import { SpacerComponent } from './spacer/spacer.component';
import { KeysPipe } from './keys.pipe';
import { CircularJsonPipe } from './circular-json.pipe';

@NgModule({
    imports: [],
    exports: [
        NumberSiPrefixPipe,
        KeysPipe,
        CircularJsonPipe,
        SpacerComponent
    ],
    declarations: [
        NumberSiPrefixPipe,
        KeysPipe,
        CircularJsonPipe,
        SpacerComponent
    ],
    providers: [
        FormatCaseService
    ],
})
export class MiscModule { }
