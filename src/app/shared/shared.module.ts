import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DwTableComponent } from './dw-table/dw-table.component';
import { DwSearchComponent } from './dw-search/dw-search.component';
import { DwDatePickerComponent } from './dw-date-picker/dw-date-picker.component';
import { DwPaginationComponent } from './dw-pagination/dw-pagination.component';
import { DwModelComponent } from './dw-model/dw-model.component';
import { DwBtnsComponent } from './dw-btns/dw-btns.component';

const SHAREDS = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  RouterModule,
  NgZorroAntdModule
];
const COMPONENTS = [
  DwTableComponent,
  DwSearchComponent,
  DwDatePickerComponent,
  DwPaginationComponent,
  DwModelComponent,
  DwBtnsComponent
]
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
