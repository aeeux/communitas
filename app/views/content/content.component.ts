import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'app/api/ApiService';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  @Input() qualityEducation;
  @Input() infrastructure;
  @Input() lifeBelowWater;
  @Input() genderEquality;

  constructor(private service: ApiService) {}

  readData: any;
  errormsg: any;

  ngOnInit() {
    this.service.getAllArticleData().subscribe((res) => {
      console.log(res, 'res ==>');

      this.readData = res.data;
    });
  }

  articleForm = new FormGroup({
    title: new FormControl('', Validators.required),
    descr: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    prob1: new FormControl('', Validators.required),
    solu1: new FormControl('', Validators.required),
    prob2: new FormControl('', Validators.required),
    solu2: new FormControl('', Validators.required),
    prob3: new FormControl('', Validators.required),
    solu3: new FormControl('', Validators.required),
    prob4: new FormControl('', Validators.required),
    solu4: new FormControl('', Validators.required),
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
