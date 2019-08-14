import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DelonABCModule } from '@delon/abc';
import { NgZorroAntdModule } from 'ng-zorro-antd';

const SHAREDS = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  RouterModule,
  NgZorroAntdModule,
  DelonABCModule
];
const COMPONENTS = [
];
@NgModule({
  imports: [
    ...SHAREDS
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...SHAREDS,
    ...COMPONENTS
  ]
})
export class SharedModule { }
