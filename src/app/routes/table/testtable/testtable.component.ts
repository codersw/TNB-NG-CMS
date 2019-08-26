import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {TableService} from '../../../service/table.service';
import {Table} from '../../../model/table';
import {MisTableListComponent} from '../../../shared/mis-table-list/mis-table-list.component';

@Component({
  selector: 'app-testtable',
  templateUrl: './testtable.component.html',
  styleUrls: ['./testtable.component.less']
})
export class TesttableComponent implements OnInit, AfterViewInit {
  table = new Table();
  constructor(
   private tableService: TableService
  ) { }
  ZaiZhiZhuangTai = [
    { index: 1, text: '在职', value: false, type: 'success', checked: false},
    { index: 2, text: '离职', value: false, type: 'error', checked: false }
  ];
  ngOnInit() {
    this.reload(1, 10);
  }
  page(param: any): void {
    console.log(param);
    this.reload(param.pi, param.ps);
  }
  ngAfterViewInit() {
  }
  reload( pageindex: number, pagesize: number): void {
    this.table.column = [
      { title: '行号', type: 'no' },
      { title: '工号', index: 'UserId'},
      { title: '姓名', index: 'UserName' },
      { title: '手机号', index: 'mobile'},
      { title: '部门', index: 'OrgName'},
      {
        title: '在职状态', index: 'ZaiZhiZhuangTai',
        filter: {
          menus: this.ZaiZhiZhuangTai,
          fn: (filter: any, record: any) => record.ZaiZhiZhuangTai === filter.index,
        },
        format: (item: any) => this.ZaiZhiZhuangTai.find( e => e.index === item.ZaiZhiZhuangTai).text
      },
      { title: '入职日期', index: 'RzRuzhiDate' },
      {
        title: '操作',
        buttons: [
          {
            text: '修改',
            click: (item: any) => { console.log(item); }
          },
          {
            text: '删除',
            click: (item: any) => { console.log(item); }
          },
        ],
      },
    ];
    this.tableService.list( { pageindex, pagesize}, res => {
      this.table.data = res.list;
      this.table.total = res.count;
      this.table.page.showSize = true;
      this.table.page.showQuickJumper = true;
      this.table.page.zeroIndexed = true;
      this.table.page.total = true;
    });
  }
}
