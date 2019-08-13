import { NgModule } from '@angular/core';
import { RoutesRoutingModule } from './routes-routing.module';
import { LoginComponent } from './passport/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    RoutesRoutingModule,
    SharedModule
  ]
})
export class RoutesModule { }
