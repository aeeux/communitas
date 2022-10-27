import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

//utilizing OnInit
export class HomeComponent implements OnInit {

  constructor() {
    //Contructor called first time before the ngOnInit()
    //Example: API/Database call
  }

  ngOnInit(): void {
    //Called after the contructor and called after the first ngOnChanges()
  }

}
