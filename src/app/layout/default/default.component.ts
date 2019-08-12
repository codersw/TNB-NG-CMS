import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.less']
})
export class DefaultComponent implements OnInit {
  isCollapsed = false;
  // 读取点击折叠结果
  launchSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(): void {
  }
}
