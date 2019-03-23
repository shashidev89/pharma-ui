import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PharmaService {
  headers: Headers;
  options: RequestOptions;

  constructor(private http:Http) {

    this.headers = new Headers({ 'Content-Type': 'application/json',
      'Accept': 'q=0.8;application/json;q=0.9' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getData(): Observable<any> {
    return this.http.get('assets/data.json').map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Data Error'));
  }
  getService(): Observable<any> {
    let url = 'http://localhost:3002/users';

    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getUser(id:number): Observable<any> {
    let url = 'http://localhost:3002/users/'+id;

    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }


  postService(url: string, param: any): Observable<any> {
    let body = JSON.stringify(param);
    return this.http
      .post(url, body, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  deleteUser(id:number):Observable<any>{
    let baseurl = 'http://localhost:3002/users/'+id;
    return this.http.delete(baseurl)
      .map(this.extractData)
      .catch(this.handleError);
  }


  updateUser(id:number,param:any):Observable<any>{
    let baseurl = 'http://localhost:3002/users/'+id;
    let body = JSON.stringify(param);
    return this.http.patch(baseurl,body,this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }


  postSales(url: string, param: any): Observable<any> {
    let body = JSON.stringify(param);
    return this.http
      .post(url, body, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  postShortage(url: string, param: any): Observable<any> {
    let body = JSON.stringify(param);
    return this.http
      .post(url, body, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getShortage(): Observable<any> {
    let url = 'http://localhost:3000/shortage';

    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }
  getShortageId(id:number): Observable<any> {
    let url = 'http://localhost:3000/shortage/'+id;

    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }
  deleteShortage(id:number):Observable<any>{
    let baseurl = 'http://localhost:3000/shortage/'+id;
    return this.http.delete(baseurl)
      .map(this.extractData)
      .catch(this.handleError);
  }


  updateShortage(id:number,param:any):Observable<any>{
    let baseurl = 'http://localhost:3000/shortage/'+id;
    let body = JSON.stringify(param);
    return this.http.patch(baseurl,body,this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }
  postCapital(url: string, param: any): Observable<any> {
    let body = JSON.stringify(param);
    return this.http
      .post(url, body, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


}



