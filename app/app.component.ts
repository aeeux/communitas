import { Component, OnInit } from '@angular/core';
import { loadingController } from '@ionic/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  qualityEducation = {
    title: '',
    intro: '',
    image: '',
    body: '',
  };

  infrastructure = {
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

  genderEquality = {
    title: '',
    intro: '',
    image: '',
    body: '',
  };

  QualityEducation() {
    this.qualityEducation = {
      title: 'Quality Education',
      intro: 'Some Intro about Quality Education',
      image: 'https://miro.medium.com/max/720/1*a5h7AJISKYMspgWVmU5pYA.jpeg',
      body: 'main text body of something about Quality Education',
    };

    this.infrastructure = {
      title: '',
      intro: '',
      image: '',
      body: '',
    };

    this.lifeBelowWater = {
      title: '',
      intro: '',
      image: '',
      body: '',
    };

    this.genderEquality = {
      title: '',
      intro: '',
      image: '',
      body: '',
    };
  }

  Infrastructure() {
    this.qualityEducation = {
      title: '',
      intro: '',
      image: '',
      body: '',
    };

    this.infrastructure = {
      title: 'Infrastructure',
      intro: 'Some Intro about Infrastructure',
      image: 'https://miro.medium.com/max/720/1*a5h7AJISKYMspgWVmU5pYA.jpeg',
      body: 'main text body of something about Infrastructure',
    };

    this.lifeBelowWater = {
      title: '',
      intro: '',
      image: '',
      body: '',
    };

    this.genderEquality = {
      title: '',
      intro: '',
      image: '',
      body: '',
    };
  }

  LifeBelowWater() {
    this.qualityEducation = {
      title: '',
      intro: '',
      image: '',
      body: '',
    };
    this.infrastructure = {
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
    this.genderEquality = {
      title: '',
      intro: '',
      image: '',
      body: '',
    };
  }

  GenderEquality() {
    this.qualityEducation = {
      title: '',
      intro: '',
      image: '',
      body: '',
    };

    this.infrastructure = {
      title: '',
      intro: '',
      image: '',
      body: '',
    };

    this.lifeBelowWater = {
      title: '',
      intro: '',
      image: '',
      body: '',
    };

    this.genderEquality = {
      title: 'Gender Equality',
      intro: 'Some Intro about Gender Equality',
      image: 'https://miro.medium.com/max/720/1*a5h7AJISKYMspgWVmU5pYA.jpeg',
      body: 'main text body of something about Gender Equality',
    };
  }

  constructor() {}

  ngOnInit(): void {}
}
