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
}
