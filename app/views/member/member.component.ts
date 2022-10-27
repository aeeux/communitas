import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
})

export class MemberComponent implements OnInit {

  constructor() {
    //Contructor called first time before the ngOnInit()
    //Example: API/Database call
  }

  ngOnInit(): void {
    //Called after the contructor and called after the first ngOnChanges()
  }

}
