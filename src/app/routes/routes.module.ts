import { NgModule } from '@angular/core';
import { RoutesRoutingModule } from './routes-routing.module';
import { LoginComponent } from './passport/login/login.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RoutesRoutingModule,
    SharedModule
  ]
})
export class RoutesModule { }
