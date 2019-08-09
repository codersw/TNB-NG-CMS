import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpService
  ) { }

  weather(ip: any, callback): void {
    this.http.jsonp('https://www.tianqiapi.com/api/?version=v1&ip=' + ip, 'callback').subscribe(
      res => {
        callback(res);
      },
      err => {
          console.log(err);
      }
    );
  }
}
