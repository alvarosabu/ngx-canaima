import { NgModule } from '@angular/core';
import { NumberSiPrefixPipe } from './number-si-prefix.pipe';
import { FormatCaseService } from './format-case.service';

@NgModule({
    imports: [],
    exports: [
        NumberSiPrefixPipe
    ],
    declarations: [
        NumberSiPrefixPipe
    ],
    providers: [
        FormatCaseService
    ],
})
export class MiscModule { }
