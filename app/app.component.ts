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
    desc: "",
    image: '',
    prob1: "",
    solu1: "",
    prob2: "",
    solu2: "",
    prob3: "",
    solu3: "",
  };

  infrastructure = {
    title: '',
    desc: '',
    image: '',
    prob1: "",
    solu1: '',
    prob2: '',
    solu2: '',
    prob3: '',
    solu3: '',
    prob4: '',
    solu4: '',
  };

  lifeBelowWater = {
    title: '',
    desc: '',
    image: '',
    prob1: "",
    solu1: '',
    prob2: '',
    solu2: '',
    prob3: '',
    solu3: '',
    prob4: '',
    solu4: '',
  };

  genderEquality = {
    title: '',
    desc: '',
    image: '',
    prob1: "",
    solu1: '',
    prob2: '',
    solu2: '',
    prob3: '',
    solu3: '',
    prob4: '',
    solu4: '',
  };

  QualityEducation() {
    this.qualityEducation = {
      title: 'Quality Education',
      desc: "Many companies eventually get to a point where future work depends on new solutions and skills in the workforce. However, that doesn't mean that your business is able to hire new people to take on future tasks.To secure growth, businesses should give the opportunity to educate and grow their personale. Giving free education possibilities for personale, would be a huge step for the business.",
      image: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      prob1: "1. Sustainability Workshops",
      solu1: "Education on sustainability in workplaces is a way for your company to solve many problems working with the UN world goals. Your local business council offer workshops on topics such as sustainable logistics to how to use the community to your business' benefits. Every council has a business council with a small annual fee and many perks. ",
      prob2: "2. Business and school innovation. ",
      solu2: "Another way to get new eyes on a particular obstacle your business is facing, is by participating in local school's innovation days. Many schools welcome the opportunity to work with real companies on real life problems. It does take time out of your day, and a solution is guaranteed. However, it's free and helps the younger generations progres.",
      prob3: '3. Take on interns',
      solu3: "There are many types of interns. paid and unpaid student interns is the most common, however, work aid programs are always looking for companies to pair up with, to help unemployed people find their next workplace. You aren't required to hire anyone after their internship. Instead, it's a great opportunity to get new blood in your company. ",
    };

    this.infrastructure = {
      title: '',
      desc: '',
      image: '',
      prob1: "",
      solu1: '',
      prob2: '',
      solu2: '',
      prob3: '',
      solu3: '',
      prob4: '',
      solu4: '',
    };

    this.lifeBelowWater = {
      title: '',
      desc: '',
      image: '',
      prob1: "",
      solu1: '',
      prob2: '',
      solu2: '',
      prob3: '',
      solu3: '',
      prob4: '',
      solu4: '',
    };

    this.genderEquality = {
      title: '',
      desc: '',
      image: '',
      prob1: "",
      solu1: '',
      prob2: '',
      solu2: '',
      prob3: '',
      solu3: '',
      prob4: '',
      solu4: '',
    };
  }

  Infrastructure() {
    this.qualityEducation = {
      title: '',
      desc: '',
      image: '',
      prob1: "",
      solu1: '',
      prob2: '',
      solu2: '',
      prob3: '',
      solu3: '',
    };

    this.infrastructure = {
      title: 'Infrastructure',
      desc: 'Some Intro about Infrastructure',
      image: 'https://miro.medium.com/max/720/1*a5h7AJISKYMspgWVmU5pYA.jpeg',
      prob1: "",
      solu1: '',
      prob2: '',
      solu2: '',
      prob3: '',
      solu3: '',
      prob4: '',
      solu4: '',
    };

    this.lifeBelowWater = {
      title: '',
      desc: '',
      image: '',
      prob1: "",
      solu1: '',
      prob2: '',
      solu2: '',
      prob3: '',
      solu3: '',
      prob4: '',
      solu4: '',
    };

    this.genderEquality = {
      title: '',
      desc: '',
      image: '',
      prob1: "",
      solu1: '',
      prob2: '',
      solu2: '',
      prob3: '',
      solu3: '',
      prob4: '',
      solu4: '',
    };
  }

  LifeBelowWater() {
    this.qualityEducation = {
    title: '',
    desc: '',
    image: '',
    prob1: "",
    solu1: '',
    prob2: '',
    solu2: '',
    prob3: '',
    solu3: '',

    };
    this.infrastructure = {
      title: '',
      desc: '',
      image: '',
      prob1: "",
      solu1: '',
      prob2: '',
      solu2: '',
      prob3: '',
      solu3: '',
      prob4: '',
      solu4: '',
    };
    this.lifeBelowWater = {
    title: 'Life Below Water',
    desc: "Our oceans are taking hits from all around. Plastic and chemical pollution is one of the most well known problems that most countries, companies and industries are taking steps towards lowering. But other known problems like overfishing, bleaching and changing of currents are more challenging for companies to combat. Especially those, who arent directly working with or around our oceans. But perhaps it doesn't have to be as complicated as such.",
    image: 'https://images.unsplash.com/photo-1573770200393-d28efec99581?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80',
    prob1: "Fish on the menu?",
    solu1: "The simple solution would be - leave fish off the menu . If you have a cantina or other kind of meal services. Don't serve fish. Try not substitute fish with other meats, but focus on climate friendly alternatives like plant based solutions",
    prob2: "Fish HAVE to be on the menu",
    solu2: "Not all industries can leave out fish and seafood. Take the sushi industri. Fish is the main product. A way to combat overfishing of the seas would be to use land based fish farming. This solution also actively lessens water pollution and diseases.",
    prob3: "Avoid building close to the ocean",
    solu3: "Even though laws have changed and you are allowed to build closer to the ocean than previously, one way your company can help life below water is by building at least 3 kilometers or 1.8 miles in lands and away from the shores. If possible build up instead of out.",
    prob4: "Choose work uniforms that don't pollute",
    solu4: "As much as 20% of ocean pollution comes from the clothing industry. Your company can actively contribute to the solution by using sustainable clothing brands like ENGEL or clothing not using polyester.",
    };
    this.genderEquality = {
      title: '',
      desc: '',
      image: '',
      prob1: "",
      solu1: '',
      prob2: '',
      solu2: '',
      prob3: '',
      solu3: '',
      prob4: '',
      solu4: '',
    };
  }

  GenderEquality() {
    this.qualityEducation = {
      title: '',
      desc: '',
      image: '',
      prob1: "",
      solu1: '',
      prob2: '',
      solu2: '',
      prob3: '',
      solu3: '',
    };

    this.infrastructure = {
      title: '',
      desc: '',
      image: '',
      prob1: "",
      solu1: '',
      prob2: '',
      solu2: '',
      prob3: '',
      solu3: '',
      prob4: '',
      solu4: '',
    };

    this.lifeBelowWater = {
      title: '',
      desc: '',
      image: '',
      prob1: "",
      solu1: '',
      prob2: '',
      solu2: '',
      prob3: '',
      solu3: '',
      prob4: '',
      solu4: '',
    };

    this.genderEquality = {
      title: 'Gender Equality',
      desc: 'Some Intro about Gender Equality',
      image: 'https://miro.medium.com/max/720/1*a5h7AJISKYMspgWVmU5pYA.jpeg',
      prob1: "",
      solu1: '',
      prob2: '',
      solu2: '',
      prob3: '',
      solu3: '',
      prob4: '',
      solu4: '',
    };
  }

  constructor() {}

  ngOnInit(): void {}
}
