import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})
export class ReadComponent implements OnInit {

  artikler = [
    {
      verdensmaal: 'verdensmål 4',
      titel: 'titel 1',
      desc: 'dette er en beskrivelse',
      // eslint-disable-next-line max-len
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Eq5SBB6WjhIeeLVBaA16wQ6dXK49DNWRYUcl8GzmW3yfQ5pd3-0XbK9RfI7vWgg74Bk&usqp=CAU',
      prob1: 'problem 1',
      sol1: 'solution 1',
      prob2: 'problem 2',
      sol2: 'solution 2',
      prob3: 'problem 3',
      sol3: 'solution 3',
      prob4: 'problem 4',
      sol4: 'solution 4'

    },
    {
      verdensmaal: 'verdensmål 9',
      titel: 'titel 1',
      desc: 'dette er en beskrivelse',
      // eslint-disable-next-line max-len
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Eq5SBB6WjhIeeLVBaA16wQ6dXK49DNWRYUcl8GzmW3yfQ5pd3-0XbK9RfI7vWgg74Bk&usqp=CAU',
      prob1: 'problem 1',
      sol1: 'solution 1',
      prob2: 'problem 2',
      sol2: 'solution 2',
      prob3: 'problem 3',
      sol3: 'solution 3',
      prob4: 'problem 4',
      sol4: 'solution 4'

    },
    {
      verdensmaal: 'verdensmål 14',
      titel: 'titel 1',
      desc: 'dette er en beskrivelse',
      // eslint-disable-next-line max-len
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Eq5SBB6WjhIeeLVBaA16wQ6dXK49DNWRYUcl8GzmW3yfQ5pd3-0XbK9RfI7vWgg74Bk&usqp=CAU',
      prob1: 'problem 1',
      sol1: 'solution 1',
      prob2: 'problem 2',
      sol2: 'solution 2',
      prob3: 'problem 3',
      sol3: 'solution 3',
      prob4: 'problem 4',
      sol4: 'solution 4'

    },
    {
      verdensmaal: 'verdensmål 2',
      titel: 'titel 1',
      desc: 'dette er en beskrivelse',
      // eslint-disable-next-line max-len
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Eq5SBB6WjhIeeLVBaA16wQ6dXK49DNWRYUcl8GzmW3yfQ5pd3-0XbK9RfI7vWgg74Bk&usqp=CAU',
      prob1: 'problem 1',
      sol1: 'solution 1',
      prob2: 'problem 2',
      sol2: 'solution 2',
      prob3: 'problem 3',
      sol3: 'solution 3',
      prob4: 'problem 4',
      sol4: 'solution 4'

    }
  ];

  constructor() { }

  ngOnInit() {}

}
