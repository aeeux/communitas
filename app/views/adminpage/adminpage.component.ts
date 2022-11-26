import { Component, OnInit } from '@angular/core';
// Import the AuthService type from the SDK
//MEMIS Was HERE
import { AuthService } from '@auth0/auth0-angular';
import { ApiService } from 'app/api/ApiService';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
})
export class AdminpageComponent implements OnInit {
  message = '';
  readData: any;

  constructor(public auth: AuthService, public service: ApiService) {}

  ngOnInit() {
    this.service.getAllArticleData().subscribe((res) => {
      console.log(res, 'res ==>');

      this.readData = res.data;
    });
  }

  logout() {
    this.auth.logout();
  }
}
