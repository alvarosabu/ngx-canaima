import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  HttpModule,
  XHRBackend,
  RequestOptions,
  Http
} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {
  InterceptorService,
  Interceptor,
  InterceptedRequest,
  InterceptedResponse
} from 'ng2-interceptors';
import {
  TranslateModule,
  TranslateLoader,
} from '@ngx-translate/core';
import {
  TranslateHttpLoader
} from '@ngx-translate/http-loader';

import {
  NgxCanaimaModule
} from './../../../../src/index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    NgxCanaimaModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http, '/assets/i18n/', '.json'),
        deps: [HttpClient]
      }
    })
  ],
  declarations: [
  ],

  providers: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    HttpModule,
    NgxCanaimaModule
  ]
})
export class SharedModule { }
