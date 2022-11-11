import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
})
export class ContentComponent implements OnInit {
  @Input() genderEquality;
  @Input() lifeBelowWater;

  //lifeBelowWater: Array<string>
  constructor() {}

  ngOnInit() {}
}
