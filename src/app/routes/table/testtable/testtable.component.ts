import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TableService} from '../../../service/table.service';

@Component({
  selector: 'app-testtable',
  templateUrl: './testtable.component.html',
  styleUrls: ['./testtable.component.less']
})
export class TesttableComponent implements OnInit, AfterViewInit {
  table: any = {};
  constructor(
   private tableService: TableService
  ) { }
  ZaiZhiZhuangTai = [
    { index: 1, text: '在职', value: false, type: 'success', checked: false},
    { index: 2, text: '离职', value: false, type: 'error', checked: false }
  ];
  ngOnInit() {
    this.table.column = [
      { title: '行号', type: 'no' },
      { title: '工号', index: 'UserId'},
      { title: '姓名', index: 'UserName' },
      { title: '手机号', index: 'mobile'},
      { title: '部门', index: 'OrgName'},
      {
        title: '在职状态', index: 'ZaiZhiZhuangTai', render: 'status',
        filter: {
          menus: this.ZaiZhiZhuangTai,
          fn: (filter: any, record: any) => record.status === filter.index,
        },
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
    this.tableService.list(null, res => {
      this.table.data = res.list;
    });
  }
  ngAfterViewInit() {
  }
}
