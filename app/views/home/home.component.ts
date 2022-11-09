import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  blogs = [
    { ID: 1, Title: 'Quality Education', Problem1:"", Solution1:"",Problem2:"", Solution2:"", Problem3:"", Solution3:"", Problem4:"", Solution4:"",},

    { ID: 2, Title: 'Gender Equality', Problem1:"", Solution1:"",Problem2:"", Solution2:"", Problem3:"", Solution3:"", Problem4:"", Solution4:"", },

    { ID: 3, Title: 'Industry, Innovation & Inrastructure' },

    { ID: 4, Title: 'Life Below Water', Desc: "Our oceans are taking hits from all around. Plastic and chemical pollution is one of the most well known problems that most countries, companies and industries are taking steps towards lowering. But other known problems like overfishing, bleaching and changing of currents are more challenging for companies to combat.Especially those, who arent directly working with or around our oceans.<br/> But perhaps it doesn't have to be as complicated as such.", Problem1: "Fish on the menu?", Solution1: "The simple solution would be - leave fish off the menu . If you have a cantina or other kind of meal services. Don't serve fish. Try not substitute fish with other meats, but focus on climate friendly alternatives like plant based solutions", Problem2:"Fish HAVE to be on the menu", Solution2: "Not all industries can leave out fish and seafood. Take the sushi industri. Fish is the main product. A way to combat overfishing of the seas would be to use land based fish farming. This solution also actively lessens water pollution and diseases. ", Problem3:"Avoid building close to the ocean", Solution3: "Even though laws have changed and you are allowed to build closer to the ocean than previously, one way your company can help life below water is by building at least 3 kilometers or 1.8 miles in lands and away from the shores. If possible build up instead of out.", Problem4:"Choose work uniforms that don't pollute", Solution4: "As much as 20% of ocean pollution comes from the clothing industry. Your company can actively contribute to the solution by using sustainable clothing brands like ENGEL or clothing not using polyester. ",}
  ];

  constructor() { }

  ngOnInit() { }
}
