// tslint:disable-next-line:max-line-length
import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, TemplateRef, Type, ViewChild } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { STChange, STColumn, STComponent, STData } from '@delon/abc';
import {Table} from '../../model/table';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mis-table-list',
  templateUrl: './mis-table-list.component.html',
  styleUrls: ['./mis-table-list.component.less']
})
export class MisTableListComponent implements OnInit, AfterViewInit {

  // 显示加载中
  loading = false;
  // 所选中的行
  selectedRows: STData[] = [];
  @Input()
  dict: any;
  @Input()
  table: Table;
  @Output()
  page = new EventEmitter<any>();
  @ViewChild('st', { static: true })
  st: STComponent;
  totalCallNo = 0;
  constructor(
    public msg: NzMessageService,
    private cdr: ChangeDetectorRef,
  ) { }
  remove() {
  }
  stChange(e: STChange) {
    switch (e.type) {
      case 'checkbox':
        this.selectedRows = e.checkbox;
        this.totalCallNo = this.selectedRows.reduce((total, cv) => total + cv.callNo, 0);
        this.cdr.detectChanges();
        break;
      case 'filter':
        break;
      case 'pi':
        this.page.emit({ pageindex: e.pi, pagesize: e.ps});
    }
  }
  ngOnInit() {
    console.log(this.table);
  }
  ngAfterViewInit() {
  }
}

