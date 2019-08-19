import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TesttableComponent} from './testtable/testtable.component';


const routes: Routes = [{ path: 'testtable' , component: TesttableComponent , data: { title: '测试列表' }}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
