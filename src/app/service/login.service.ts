import { Inject, Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';
import { DA_SERVICE_TOKEN, TokenService } from '@delon/auth';
import { NzMessageService, NzNotificationService } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpService,
    private router: Router,
    private notification: NzNotificationService,
    private nzMessageService: NzMessageService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: TokenService
  ) { }
  login(userName: string, password: string): void {
    this.http.post('/login?_allow_anonymous=true', { userName, password}).subscribe(
      res => {
        if (res.code > 0) {
          this.tokenService.set(res.data);
          this.router.navigateByUrl('dashboard');
        } else {
          this.nzMessageService.create('error', res.msg);
        }
      },
       err => {
        console.log(JSON.stringify(err));
       }
    );
  }
  logout(): void {
    this.http.get('/logout?_allow_anonymous=true').subscribe(
      res => {
        if (res.code > 0) {
          this.tokenService.clear();
          this.router.navigateByUrl('/passport/login');
        } else {
          this.nzMessageService.create('error', res.msg);
        }
      },
      err => {
        console.log(JSON.stringify(err));
      }
    );
  }
}
