import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  blogs = [
    { ID: 1, Title: 'Quality Education' },
    { ID: 2, Title: 'Gender equality' },
    { ID: 3, Title: '' },
    { ID: 4, Title: 'Life Below Water', Desc: "Our oceans are taking hits from all around. Plastic and chemical pollution is one of the most well known problems that most countries, companies and industries are taking steps towards lowering. But other known problems like overfishing, bleaching and changing of currents are more challenging for companies to combat.Especially those, who arent directly working with or around our oceans.<br/> But perhaps it doesn't have to be as complicated as such.", problem1: "Fish on the menu?:", Solution1: "The simple solution would be - leave fish off the menu . If you have a cantina or other kind of meal services. Don’t serve fish. Try not substitute fish with other meats, but focus on climate friendly alternatives like plant based solutions",  }
  ];

  constructor() { }

  ngOnInit() { }
}
