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

  //get single article data
  getSingleArticleData(id: any): Observable<any> {
    let ids = id;
    return this._http.get(`${this.apiUrl}/${ids}`);
  }

  //Create Article Data
  createArticleData(data: any): Observable<any> {
    console.log(data, 'create');
    return this._http.post(`${this.apiUrl}`, data);
  }

  //Post Account Data
  postAccountData(data: any, prop: any): Observable<any> {
    console.log(data, 'post');
    return this._http.post(`${this.apiUrlAccounts}`, data, prop);
  }

  //Delete Article Data
  deleteArticleData(id: any): Observable<any> {
    let ids = id;
    return this._http.delete(`${this.apiUrl}/${ids}`);
  }

  //Update Article Data
  updateArticleData(data: any, id: any): Observable<any> {
    let ids = id;
    return this._http.put(`${this.apiUrl}/${ids}`, data);
  }
}
