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
import { NavbarModule } from './navbar/navbar.module';

import { CardsModule } from './../../../../src/cards/cards.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    NavbarModule,
    CardsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: Http) => new TranslateHttpLoader(http, '/assets/i18n/', '.json'),
        deps: [Http]
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
    NavbarModule,
    CardsModule
  ]
})
export class SharedModule { }
