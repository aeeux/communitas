import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Emitters } from 'app/emitters/emitters';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
})
export class AdminpageComponent implements OnInit {
  message = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:3000/accounts', { withCredentials: true })
      .subscribe(
        (res: any) => {
          this.message = `Hi! ${res.data[0].username}`;
          Emitters.authEmitter.emit(true);
        },
        (err) => {
          this.message = 'You are not logged in';
          Emitters.authEmitter.emit(false);
        }
      );
  }
}
