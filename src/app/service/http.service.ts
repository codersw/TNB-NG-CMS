import { Inject, Injectable, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NzNotificationService } from 'ng-zorro-antd';

export const API_URL = new InjectionToken<string>('apiUrl');
export interface HeaderParam {
  key: string;
  value: string;
}
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    @Inject(API_URL) public urlPrefix,
    private notification: NzNotificationService
  ) { }

  /**
   * Get request
   * @param  url         请求地址
   * @param  params      请求参数
   * @param  credentials 请求是否携带cookie
   */
  get<T>(url: string, params: any, credentials: boolean = true): Observable<any> {
    if (params) {
      let parameter = '?';
      Object.keys(params).forEach((i) => {
        parameter += i + '=' + params[i] + '&';
      });
      url += parameter.substring(0, parameter.length - 1);
    }
    return this.http.get<T>(this.urlPrefix + url, { withCredentials: credentials });
  }

  /**
   * Post request
   * @param  url         请求地址
   * @param  params      请求参数
   * @param  headers     请求头
   * @param  credentials 请求是否携带cookie
   */
  post<T>(url: string, params: any, headers?: Array<HeaderParam>, credentials: boolean = true): Observable<any> {
    const param = {
      'Content-Type': 'text/plain'
    };
    if (headers !== undefined) {
      headers.forEach((val) => {
        param[val.key] = val.value;
      });
    }
    const httpHeaders: HttpHeaders = new HttpHeaders(param);
    return this.http.post<T>(
      this.urlPrefix + url,
      JSON.stringify(params),
      {
        headers: httpHeaders,
        withCredentials: credentials
      }
    );
  }

  /**
   * 通用请求
   * @param  method 请求方法
   * @param  url    请求地址
   * @param  params 请求参数
   * @param  header 请求头
   * @param  credentials 请求是否携带cookie
   */
  request(method: 'get' | 'post', url: string, params: any, header?: HttpHeaders, credentials: boolean = true): Observable<any> {
    const req = new HttpRequest(method, this.urlPrefix + url, params, {
      headers: header,
      withCredentials: credentials
    });
    return this.http.request(req);
  }

  /**
   * 文件上传
   * @param url 请求地址
   * @param formData 文件数据
   * @param header 请求头
   * @param credentials 请求是否携带cookie
   */
  upLoadFile(url: string, formData: any, header?: Array<HeaderParam>, credentials: boolean = true): Observable<any> {
    const param = {
      Accept: 'application/json'
    };
    if (header !== undefined) {
      header.forEach((val) => {
        param[val.key] = val.value;
      });
    }
    return this.http.post(url, formData, {headers: param, withCredentials: credentials});
  }

  /**
   *  跨域请求
   * @param url 请求地址
   * @param callback jsonp回调函数
   */
  jsonp(url: string, callback: string): Observable<any> {
    return this.http.jsonp(url, callback);
  }

  /**
   * 请求验证
   * @param e 服务器返回数据
   */
  callbackCode(e: { resCode: any; resMsg: string; }) {
    switch (e.resCode) {
      case '01' || '02' || '03':
        this.notification.create('warning', '系统提示',
          e.resMsg);
        break;
      case '04':
        this.notification.create('error', '系统提示',
          e.resMsg);
        break;
      default:
        return e;
    }
  }

}
