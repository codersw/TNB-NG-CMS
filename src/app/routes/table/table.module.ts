import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import {TesttableComponent} from './testtable/testtable.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    TesttableComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    SharedModule
  ]
})
export class TableModule { }
