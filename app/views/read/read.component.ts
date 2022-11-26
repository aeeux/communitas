import { Component, OnInit } from '@angular/core';
// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';
import { ApiService } from 'app/api/ApiService';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
})
export class ReadComponent implements OnInit {
  message = '';
  readData: any;
  successmsg: any;

  constructor(public auth: AuthService, public service: ApiService) {
    this.getAllData();
  }

  ngOnInit() {
    this.getAllData();
  }

  logout() {
    this.auth.logout();
  }

  deleteArticleID(id: any) {
    this.service.deleteArticleData(id).subscribe((res) => {
      this.successmsg = res.message;

      this.getAllData();
    });
  }

  getAllData() {
    this.service.getAllArticleData().subscribe((res) => {
      console.log(res, 'res ==>');

      this.readData = res.data;
    });
  }
}
