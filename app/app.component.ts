import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  intro = {
    title: 'Pick a Topic',
    paragraph: 'We hope you enjoy the read.😊',
  };

  qualityEducation = {
    title: '',
    desc: '',
    image: '',
    prob1: '',
    solu1: '',
    prob2: '',
    solu2: '',
    prob3: '',
    solu3: '',
  };

  infrastructure = {
    title: '',
    desc: '',
    image: '',
    prob1: '',
    solu1: '',
    prob2: '',
    solu2: '',
  };

  lifeBelowWater = {
    title: '',
    desc: '',
    image: '',
    prob1: '',
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
    prob1: '',
    solu1: '',
    prob2: '',
    solu2: '',
    prob3: '',
    solu3: '',
    prob4: '',
    solu4: '',
  };

  QualityEducation() {
    this.intro = {
      title: '',
      paragraph: '',
    };
    this.qualityEducation = {
      title: 'Quality Education',
      desc: "Many companies eventually get to a point where future work depends on new solutions and skills in the workforce. However, that doesn't mean that your business is able to hire new people to take on future tasks.To secure growth, businesses should give the opportunity to educate and grow their personale. Giving free education possibilities for personale, would be a huge step for the business.",
      image:
        'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      prob1: '1. Sustainability Workshops',
      solu1:
        "Education on sustainability in workplaces is a way for your company to solve many problems working with the UN world goals. Your local business council offer workshops on topics such as sustainable logistics to how to use the community to your business' benefits. Every council has a business council with a small annual fee and many perks. ",
      prob2: '2. Business and school innovation. ',
      solu2:
        "Another way to get new eyes on a particular obstacle your business is facing, is by participating in local school's innovation days. Many schools welcome the opportunity to work with real companies on real life problems. It does take time out of your day, and a solution is guaranteed. However, it's free and helps the younger generations progres.",
      prob3: '3. Take on interns',
      solu3:
        "There are many types of interns. paid and unpaid student interns is the most common, however, work aid programs are always looking for companies to pair up with, to help unemployed people find their next workplace. You aren't required to hire anyone after their internship. Instead, it's a great opportunity to get new blood in your company. ",
    };
    this.infrastructure = {
      title: '',
      desc: '',
      image: '',
      prob1: '',
      solu1: '',
      prob2: '',
      solu2: '',
    };

    this.lifeBelowWater = {
      title: '',
      desc: '',
      image: '',
      prob1: '',
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
      prob1: '',
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
    this.intro = {
      title: '',
      paragraph: '',
    };
    this.qualityEducation = {
      title: '',
      desc: '',
      image: '',
      prob1: '',
      solu1: '',
      prob2: '',
      solu2: '',
      prob3: '',
      solu3: '',
    };

    this.infrastructure = {
      title: 'Industry, innovation & Infrastructure',
      desc: "In 2022 the economy and businesses are under pressure from all around. First covid, War and now a global recession that hasn't even hit its peak yet. It's clear the infrastructure of both construction and companies are suffering and more than ever we need to think innovative and support new ideas and solutions. ",
      image:
        'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      prob1: '1. fruits and vegetables',
      solu1:
        'With products being delayed in transportation a low tech solution for fruit and vegetable producers could be to simply start preserving some of their produce. This has the added benefit in cases of “ugly produce” waste which is easier sold this way. For example as babyfood or in smoothies.',
      prob2: '2. Longterm construction',
      solu2:
        'Even though it might seem like an expensive solution, designing and construction using the new sustainable materials can help your company in the long run. Consider investing more in technology and new design methods in the present, and you will live up to regulations and construction for a longer time. ',
    };

    this.lifeBelowWater = {
      title: '',
      desc: '',
      image: '',
      prob1: '',
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
      prob1: '',
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
    this.intro = {
      title: '',
      paragraph: '',
    };
    this.qualityEducation = {
      title: '',
      desc: '',
      image: '',
      prob1: '',
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
      prob1: '',
      solu1: '',
      prob2: '',
      solu2: '',
    };
    this.lifeBelowWater = {
      title: 'Life Below Water',
      desc: "Our oceans are taking hits from all around. Plastic and chemical pollution is one of the most well known problems that most countries, companies and industries are taking steps towards lowering. But other known problems like overfishing, bleaching and changing of currents are more challenging for companies to combat. Especially those, who arent directly working with or around our oceans. But perhaps it doesn't have to be as complicated as such.",
      image:
        'https://images.unsplash.com/photo-1487252168646-fa0e87f6e83c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=808&q=80',
      prob1: '1. Fish on the menu?',
      solu1:
        "The simple solution would be - leave fish off the menu . If you have a cantina or other kind of meal services. Don't serve fish. Try not substitute fish with other meats, but focus on climate friendly alternatives like plant based solutions",
      prob2: '2. Fish HAVE to be on the menu',
      solu2:
        'Not all industries can leave out fish and seafood. Take the sushi industri. Fish is the main product. A way to combat overfishing of the seas would be to use land based fish farming. This solution also actively lessens water pollution and diseases.',
      prob3: '3. Avoid building close to the ocean',
      solu3:
        'Even though laws have changed and you are allowed to build closer to the ocean than previously, one way your company can help life below water is by building at least 3 kilometers or 1.8 miles in lands and away from the shores. If possible build up instead of out.',
      prob4: "4. Choose work uniforms that don't pollute",
      solu4:
        'As much as 20% of ocean pollution comes from the clothing industry. Your company can actively contribute to the solution by using sustainable clothing brands like ENGEL or clothing not using polyester.',
    };
    this.genderEquality = {
      title: '',
      desc: '',
      image: '',
      prob1: '',
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
    this.intro = {
      title: '',
      paragraph: '',
    };
    this.qualityEducation = {
      title: '',
      desc: '',
      image: '',
      prob1: '',
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
      prob1: '',
      solu1: '',
      prob2: '',
      solu2: '',
    };

    this.lifeBelowWater = {
      title: '',
      desc: '',
      image: '',
      prob1: '',
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
      desc: 'In the west, we like to think that we have closed the gap and inequality between the sexes. However, there is still a long way to go and many ways we can still improve. On a global basis, the entire world stands to earn an extra 12 trillion GDP a year, if all women were allowed to enter the workforce at the same level as men.',
      image:
        'https://images.unsplash.com/photo-1545693315-85b6be26a3d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      prob1: '1. Improve performance with one tool ',
      solu1:
        "With WEPs Gender Gap Analysis Tool your business can analyze and identify to analyze strengths, gaps, and how well your company handles equal pay, recruitment, supporting parents and caregivers, women's health, inclusive sourcing, and advocacy for gender equality.",
      prob2: '2. Choose the right suppliers',
      solu2:
        'As a business you have the obligation to know which of your suppliers are acting accordingly with regards to gender equality. Businesses that want to enhance sustainability in the world, should also choose suppliers that have the same goal.  ',
      prob3: '3. Handling discrimination in the workplace',
      solu3:
        "discrimination against women in industries should be taken very seriously. As a business it's not only a destructive environment for women but also the business and it will hurt everyone involved if not handled properly. Sage (her skal der være et link til Link 6) have identified 10 ways your business can actively use to eliminate gender biases.",
      prob4: '4. Support NGOs',
      solu4:
        'Businesses that want to contribute even more to Equality between men and women can donate to Ngos. We suggest donating to UN Women - An organization that support humanitarian work and stopping violence against women. Or Kvinderådet - This organization coaches businesses in equality both physically and online.',
    };
  }

  constructor() {}

  ngOnInit(): void {}
}
