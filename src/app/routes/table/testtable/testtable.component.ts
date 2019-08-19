import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testtable',
  templateUrl: './testtable.component.html',
  styleUrls: ['./testtable.component.less']
})
export class TesttableComponent implements OnInit {
  table: any = {};
  constructor() { }
  ZaiZhiZhuangTai = [
    { index: 1, text: '在职', value: false, type: 'success', checked: false},
    { index: 2, text: '离职', value: false, type: 'error', checked: false }
  ];
  ngOnInit() {
    this.table.data =
    this.table.column = [
      { title: '', index: 'UserId', type: 'checkbox' },
      { title: '工号', index: 'UserId', type: 'number'},
      { title: '姓名', index: 'UserName' },
      { title: '服务调用次数', index: 'mobile'},
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
  }

}
