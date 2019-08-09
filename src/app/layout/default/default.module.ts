import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';
import { SiderComponent } from './sider/sider.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [
    DefaultComponent,
    SiderComponent,
    HeaderComponent,
    BreadcrumbComponent,
    FooterComponent,
    LogoComponent
  ],
  imports: [
    DefaultRoutingModule,
    CommonModule,
    NgZorroAntdModule
  ],
  exports: [
    DefaultComponent
  ]
})
export class DefaultModule { }
