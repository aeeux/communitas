import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api/ApiService';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  constructor(private service: ApiService) {}

  readData: any;

  ngOnInit() {
    this.service.getAllArticleData().subscribe((res) => {
      this.readData = res.data;
    });
  }
}
