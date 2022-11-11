import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
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
        lifeBelowWater: {
          title: 'Life Below Water',
          intro: 'Some Intro about Life Below Water',
          image:
            'https://miro.medium.com/max/720/1*a5h7AJISKYMspgWVmU5pYA.jpeg',
          body: 'main text body of something about Life Below Water',
        },
      },
    ];
  }

  ngOnInit() {}
}
