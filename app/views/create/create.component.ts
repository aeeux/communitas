import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { ApiService } from 'app/api/ApiService';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
})
export class CreateComponent implements OnInit {
  message = '';

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

  readData: any;
  errormsg: any;

  articleForm = new FormGroup({
    title: new FormControl('', Validators.required),
    descr: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    prob1: new FormControl(''),
    solu1: new FormControl(''),
    prob2: new FormControl(''),
    solu2: new FormControl(''),
    prob3: new FormControl(''),
    solu3: new FormControl(''),
    prob4: new FormControl(''),
    solu4: new FormControl(''),
  });

  articleSubmit() {
    if (this.articleForm.valid) {
      console.log(this.articleForm.value);
      this.service
        .createArticleData(this.articleForm.value)
        .subscribe((res) => {
          console.log(res, 'Res ===>');
        });
    } else {
      this.errormsg = 'all fields are required!';
    }
  }
}
