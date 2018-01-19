import { HttpModule, Http, RequestOptions, Headers, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Injectable, OnInit }    from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RestRepositoryService {

  private devURL = environment.restUrl;
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { 
   
  }

  post<T>(resource : string, body : any) : Observable<T>{
      console.debug(JSON.stringify(body));
      return this.http.post<T>(this.devURL+'/'+resource,JSON.stringify(body), httpOptions);
  }

  get<T>(resource : string, params : string) : Observable<T>{
    return this.http.get<T>(this.devURL+'/'+resource+"?"+params, httpOptions);
  }

}
