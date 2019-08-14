import { Inject, Injectable, InjectionToken } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { _HttpClient } from '@delon/theme';
import { Observable } from 'rxjs';
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
    private http: _HttpClient,
    @Inject(API_URL) public urlPrefix
  ) { }

  /**
   * Get request
   * @param  url         请求地址
   * @param  params      请求参数
   * @param  credentials 请求是否携带cookie
   */
  get<T>(url: string, params: any = null, credentials: boolean = true): Observable<any> {
    if (params != null) {
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
      'Content-Type': 'application/json'
    };
    if (headers !== undefined) {
      headers.forEach((val) => {
        param[val.key] = val.value;
      });
    }
    const httpHeaders: HttpHeaders = new HttpHeaders(param);
    return this.http.post<T>(
      this.urlPrefix + url, params,
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
    return this.http.request(method, this.urlPrefix + url, { headers: header, withCredentials: credentials});
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
   * @param params 参数
   * @param callback jsonp回调函数
   */
  jsonp(url: string, params?: any, callback: string = 'callback'): Observable<any> {
    return this.http.jsonp(url, params , callback);
  }
}
