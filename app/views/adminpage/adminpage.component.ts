import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
})
export class AdminpageComponent implements OnInit {
  message = '';

  constructor(public auth: AuthService,) {}

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout();
  }
}
