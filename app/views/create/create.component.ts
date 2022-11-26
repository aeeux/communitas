import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { ApiService } from 'app/api/ApiService';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
})
export class CreateComponent implements OnInit {
  message = '';
  readData: any;
  errormsg: any;
  getparamid: any;
  successmsg: any;

  constructor(
    public auth: AuthService,
    public service: ApiService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getAllData();
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if (this.getparamid) {
      this.service.getSingleArticleData(this.getparamid).subscribe((res) => {
        this.articleForm.patchValue({
          title: res.data[0].title,
          descr: res.data[0].descr,
          image: res.data[0].image,
          prob1: res.data[0].prob1,
          solu1: res.data[0].solu1,
          prob2: res.data[0].prob2,
          solu2: res.data[0].solu2,
          prob3: res.data[0].prob3,
          solu3: res.data[0].solu3,
          prob4: res.data[0].prob4,
          solu4: res.data[0].solu4,
        });
      });
    }
  }

  logout() {
    this.auth.logout();
  }

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

  articleUpdate() {
    if (this.articleForm.valid) {
      this.service
        .updateArticleData(this.articleForm.value, this.getparamid)
        .subscribe((res) => {
          this.successmsg = res.message;
        });
    } else {
      this.errormsg = 'all fields are required!';
    }
  }

  getAllData() {
    this.service.getAllArticleData().subscribe((res) => {
      console.log(res, 'res ==>');

      this.readData = res.data;
    });
  }
}
