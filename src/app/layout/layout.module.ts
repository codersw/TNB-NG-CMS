import { NgModule } from '@angular/core';
import { PassportComponent } from './passport/passport.component';
import { FullscreenComponent } from './fullscreen/fullscreen.component';
import { SharedModule } from '../shared/shared.module';

const COMPONENTS = [
  PassportComponent,
  FullscreenComponent
];
@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class LayoutModule { }
