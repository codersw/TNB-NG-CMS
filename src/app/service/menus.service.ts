import { Injectable } from '@angular/core';
import {Menu} from '../model/menu';

@Injectable({
  providedIn: 'root'
})
export class MenusService {
  private readonly Menus: Menu[];
  constructor() {
    this.Menus = [
      {
        text: '实时数据',
        link: 'actual/index',
        icon: 'bank',
        children: []
      },
      {
        text: '牧场环境',
        link: 'environment/index',
        icon: 'line-chart',
        children: []
      },
      {
        text: '设备信息',
        link: 'equ-info/index',
        icon: 'barcode',
        children: []
      },
      {
        text: '设备数据',
        link: 'equ-data',
        icon: 'profile',
        children: [
          {
            text: '明细数据',
            link: 'equ-data/detail-data',
            icon: '',
          },
          {
            text: '日统计表',
            link: 'equ-data/detail-sst',
            icon: '',
          },
          {
            text: '月统计表',
            link: 'equ-data/monthly-sst',
            icon: '',
          },
          {
            text: '年统计表',
            link: 'equ-data/year-sst',
            icon: '',
          }
        ]
      },
      {
        text: '告警日志',
        link: 'alarm-log/index',
        icon: 'reconciliation',
        children: []
      },
      {
        text: '系统管理',
        link: 'system-mmt',
        icon: 'setting',
        children: [
          {
            text: '客户管理',
            link: 'system-mmt/customer',
            icon: '',
          },
          {
            text: '牧场管理',
            link: 'system-mmt/meadow',
            icon: '',
          },
          {
            text: '用户管理',
            link: 'system-mmt/user',
            icon: '',
          },
          {
            text: '角色管理',
            link: 'system-mmt/role',
            icon: '',
          },
          {
            text: '菜单管理',
            link: 'system-mmt/menu',
            icon: '',
          },

        ]
      },
      {
        text: '字典管理',
        link: 'dictionary-mmt',
        icon: 'read',
        children: [
          {
            text: '牧畜品类',
            link: 'dictionary-mmt/Livestock',
            icon: '',
          }
        ]
      },
    ];
  }
  getMenus() {
    return this.Menus;
  }
}
