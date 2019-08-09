import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WeatherService } from '../../../service/weather.service';
declare var returnCitySN: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  isCollapsed = false;
  @Output()
  nzCollapsed = new EventEmitter<void>();
  weathers = null;
  constructor(
    private weatherService: WeatherService
  ) {
  }
  ngOnInit() {
    this.weather();
  }
  /** 天气 */
  weather() {
    this.weatherService.weather(returnCitySN.cip, e => {
      this.weathers = e;
      console.log(e);
    });
  }
  changeIcon() {
    this.isCollapsed = !this.isCollapsed;
    this.nzCollapsed.emit();
  }
}
