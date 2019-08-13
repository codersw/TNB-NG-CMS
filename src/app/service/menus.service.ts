import { Injectable } from '@angular/core';
import { Menu } from '../model/menu';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class MenusService {
  private readonly Menus: Menu[];
  constructor(private http: HttpService) {
    this.Menus = [
      {
        text: '系统管理',
        link: 'system-mmt',
        icon: 'setting',
        children: [
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
          }
        ]
      }
    ];
  }
  getMenus() {
    return this.Menus;
  }
}
