import { NgModule } from '@angular/core';
import { PassportComponent } from './passport/passport.component';
import { FullscreenComponent } from './fullscreen/fullscreen.component';
import { SharedModule } from '../shared/shared.module';
import { DefaultComponent } from './default/default.component';
import { HeaderComponent } from './default/header/header.component';
import { SiderComponent } from './default/sider/sider.component';
import { LogoComponent } from './default/logo/logo.component';
import { FooterComponent } from './default/footer/footer.component';
import { BreadcrumbComponent } from './default/breadcrumb/breadcrumb.component';

const COMPONENTS = [
  PassportComponent,
  DefaultComponent,
  FullscreenComponent
];
@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ...COMPONENTS,
    SiderComponent,
    LogoComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class LayoutModule { }
