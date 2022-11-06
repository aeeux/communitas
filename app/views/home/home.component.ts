import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  goals: any[];

  //Firebase state variable for loggedInUser {{ isLoggedIn ? 'VIEW#1' : 'VIEW#2' }}

  constructor() {
    this.goals = [
      {
        genderEquality: {
          title: 'Gender Equality',
          intro: 'Some Intro about Gender Equality',
          image:
            'https://miro.medium.com/max/720/1*a5h7AJISKYMspgWVmU5pYA.jpeg',
          body: 'main text body of something about Gender Equality',
        },
        qualityEducation: {
          title: 'Quality Education',
          intro: 'Some Intro about Quality Education',
          image:
            'https://miro.medium.com/max/720/1*a5h7AJISKYMspgWVmU5pYA.jpeg',
          body: 'main text body of something about Quality Education',
        },
      },
    ];
  }

  ngOnInit() {}
}
