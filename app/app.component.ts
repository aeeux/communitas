import { Component, OnInit } from '@angular/core';
import { loadingController } from '@ionic/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  genderEquality = {
    title: '',
    intro: '',
    image: '',
    body: '',
  };

  lifeBelowWater = {
    title: '',
    intro: '',
    image: '',
    body: '',
  };

  GenderEquality() {
    this.genderEquality = {
      title: 'Gender Equality',
      intro: 'Some Intro about Gender Equality',
      image: 'https://miro.medium.com/max/720/1*a5h7AJISKYMspgWVmU5pYA.jpeg',
      body: 'main text body of something about Gender Equality',
    };
    this.lifeBelowWater = {
      title: '',
      intro: '',
      image: '',
      body: '',
    };
  }

  LifeBelowWater() {
    this.genderEquality = {
      title: '',
      intro: '',
      image: '',
      body: '',
    };
    this.lifeBelowWater = {
      title: 'Life Below Water',
      intro: 'Some Intro about Life Below Water',
      image: 'https://miro.medium.com/max/720/1*a5h7AJISKYMspgWVmU5pYA.jpeg',
      body: 'main text body of something about Life Below Water',
    };
  }

  constructor() {}

  ngOnInit(): void {}
}
