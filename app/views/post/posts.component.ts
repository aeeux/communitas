import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {
  posts: any[];

  //Firebase state variable for loggedInUser {{ isLoggedIn ? 'VIEW#1' : 'VIEW#2' }}

  constructor() {
    this.posts = [
      {
        title: 'How Old is Old?',
        intro:
          'What we consider “old” changes dramatically with age, and our perspectives can be predictive of how well we age',
        image: 'https://miro.medium.com/max/720/1*a5h7AJISKYMspgWVmU5pYA.jpeg',
        body: 'Our views of aging change significantly as we get older, influenced by many factors, including our current age and health status. In turn, what we deem as “old,” and how we see life playing out when we become old, can affect how quickly we get there. I’ll explain below. But first, some numbers: Millennials typically view 59 as old, while Boomers put the threshold at around 73, according to a U.S. survey that’s a little old itself (it was done in 2017). More recently, scientists interviewed 300 Canadians ranging in age from 45 to 100. On average, they pegged 73.7 years on the planet as the start of old age. People under 65 put it at 70.5, on average, and those over 65 set it at 77.4.',
      },
    ];
  }

  ngOnInit(): void {}
}
