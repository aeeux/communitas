import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'app/api/ApiService';

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

  ngOnInit() {
    this.service.getAllArticleData().subscribe((res) => {
      console.log(res, 'res ==>');

      this.readData = res.data;
    });
  }
}
