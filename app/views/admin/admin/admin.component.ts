import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'app/api/ApiService';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {
  form: FormGroup;

  readData: any;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private service: ApiService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  submit(): void {
    this.service
      .postAccountData(this.form.getRawValue(), {
        withCredentials: true,
      })
      .subscribe(() => this.router.navigate(['adminpage']));
  }
}
