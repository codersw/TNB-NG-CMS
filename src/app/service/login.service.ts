import {Inject, Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {Router} from '@angular/router';
import {DA_SERVICE_TOKEN, TokenService} from '@delon/auth';
declare var returnCitySN: any;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpService,
    private router: Router,
    @Inject(DA_SERVICE_TOKEN) private tokenService: TokenService
  ) { }
  login(username: string, password: string): void {
    if (username === 'admin' && password === '123456') {
      this.tokenService.set({
        token: 'admin',
        loginIP: returnCitySN.cip,
        userId: 'admin',
        loginCode: 'admin',
        type: 'login',
        time: +new Date(),
        author: 'admin'
      });
      this.router.navigateByUrl('dashboard');
    } else {
      this.http.callbackCode({ resCode: '01', resMsg: '账号或密码错误'});
    }
  }
  logout(): void {
    this.tokenService.clear();
    this.router.navigateByUrl('login');
  }
}
