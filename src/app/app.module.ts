import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HttpClientJsonpModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RoutesModule } from './routes/routes.module';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { IconsProviderModule } from './icons-provider.module';
import { environment } from '../environments/environment';
import { API_URL } from './service/http.service';
import { DelonAuthModule, SimpleInterceptor, DelonAuthConfig } from '@delon/auth';
import { DelonMockModule } from '@delon/mock';
import { DefaultInterceptor } from './interceptor/default.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { CommonModule, HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);
import * as MOCKDATA from '../../_mock';
const MOCKMODULE = !environment.production ? [ DelonMockModule.forRoot({ data: MOCKDATA }) ] : [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    SharedModule,
    LayoutModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    DelonAuthModule,
    ...MOCKMODULE
  ],
  providers: [
    // 国际化支持
    { provide: NZ_I18N, useValue: zh_CN },
    // 缓存开启
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    // 指定认证风格对应的HTTP拦截器
    { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true},
    // 自定义拦截器
    { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true},
    // 重写权限配置
    { provide: DelonAuthConfig, useFactory: fnDelonAuthConfig },
    // 读取配置的实际地址
    { provide: API_URL, useValue: environment.urlPrefix }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

export function fnDelonAuthConfig(): DelonAuthConfig {
  return {
    ...new DelonAuthConfig(),
    login_url: '/passport/login',
  };
}

