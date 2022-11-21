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

  //get all article data
  getAllArticleData(): Observable<any> {
    return this._http.get(`${this.apiUrl}`);
  }

  //Create
  createData(data: any): Observable<any> {
    return this._http.post(`${this.apiUrl}`, data);
  }

  //get article data for params /:id (1)
  //get article data for params /:id (2)
  //get article data for params /:id (3)
  //get article data for params /:id (4)
}
