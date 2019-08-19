import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, TemplateRef, Type, ViewChild} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import {STChange, STColumn, STComponent, STData} from '@delon/abc';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mis-table-list',
  templateUrl: './mis-table-list.component.html',
  styleUrls: ['./mis-table-list.component.less']
})
export class MisTableListComponent implements OnInit {

  // 显示加载中
  loading = false;
  // 所选中的行
  selectedRows: STData[] = [];
  @Input()
  dict: any;
  @Input()
  table: Table;
  @Input()
  showIndex = false;
  @ViewChild('st', { static: true })
  st: STComponent;
  columns: STColumn[] = [];
  data: any[];
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
    }
  }
  ngOnInit() {
    console.log(this.table);
    if (this.table.column) {
      console.log(this.columns);
      this.table.column.forEach( e => {
        if (e.hasOwnProperty('sort')) {
          let st = {};
          const sn = e.sort === 'ascend' ? 0 : 1;
          sn === 0 ? st = {
            default: 'ascend',
            compare: (a: any, b: any) => a[e.index] - b[e.index]
          } : st = {
            default: 'descend',
            compare: (a: any, b: any) => b[e.index] - a[e.index]
          };
          e.sort = st;
        }
        this.columns.push(e);
      });
    }
    console.log(this.columns);
  }
}
export interface Table {
  data: any;
  column: any;
  dict: any;
}
