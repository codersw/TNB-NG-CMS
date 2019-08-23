import { Injectable } from '@angular/core';
import {HttpService} from './http.service';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(
    private http: HttpService
  ) { }

  list(params: any, callback): void {
    this.http.post('/list', params).subscribe(
      res => {
        if (res.code > 0) {
          callback(res.data);
        }
      },
        err => {
          console.log(JSON.stringify(err));
        }
    );
  }
}
