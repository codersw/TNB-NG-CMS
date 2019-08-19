import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DelonABCModule } from '@delon/abc';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import {MisTableListComponent} from './mis-table-list/mis-table-list.component';

const SHAREDS = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  RouterModule,
  NgZorroAntdModule,
  DelonABCModule
];
const COMPONENTS = [
  MisTableListComponent
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
