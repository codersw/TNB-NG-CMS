import {Component, Input, OnInit} from '@angular/core';
import { MenusService } from '../../../service/menus.service';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.less']
})
export class SiderComponent implements OnInit{
  @Input()
  isCollapsed: boolean;
  constructor(
    private menu: MenusService
  ) { }

  ngOnInit(): void {
  }
}
