import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  baseUrl = 'https://textwell-eace8-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) { 

    
  }
}
