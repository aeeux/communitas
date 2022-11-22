import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpClient) {}

  //    connect frontend to backend server

  apiUrl = 'http://localhost:3000/article';
  apiUrlAccounts = 'http://localhost:3000/accounts';

  //get all article data
  getAllArticleData(): Observable<any> {
    return this._http.get(`${this.apiUrl}`);
  }

  //Create
  createArticleData(data: any): Observable<any> {
    console.log(data, 'create');
    return this._http.post(`${this.apiUrl}`, data);
  }

  //Create
  postAccountData(data: any, prop: any): Observable<any> {
    console.log(data, 'post');
    return this._http.post(`${this.apiUrlAccounts}`, data, prop);
  }

  //get article data for params /:id (1)
  //get article data for params /:id (2)
  //get article data for params /:id (3)
  //get article data for params /:id (4)
}
