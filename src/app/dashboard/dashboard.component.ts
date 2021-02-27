import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  top: any[] = [
    { value: 'assets/images/torso 1.svg', viewValue: 'Girl with Dog' },
    { value: 'assets/images/torso 2.svg', viewValue: 'Bitcoin' },
    { value: 'assets/images/torso 3.svg', viewValue: 'Girl' },
    { value: 'assets/images/torso 4.svg', viewValue: 'Blue with Dog' },
    { value: 'assets/images/torso 5.svg', viewValue: 'File' },
    { value: 'assets/images/torso 6.svg', viewValue: 'Checklist' },
    { value: 'assets/images/torso 7.svg', viewValue: 'Taco' },
    { value: 'assets/images/torso 8.svg', viewValue: 'Wallet' },
    { value: 'assets/images/torso 9.svg', viewValue: 'Girl with Shopping ag' },
    { value: 'assets/images/torso 10.svg', viewValue: 'Walking Stick' },
    { value: 'assets/images/torso 11.svg', viewValue: 'Blog' },
    { value: 'assets/images/torso 12.svg', viewValue: 'Travelling Bag' },
    { value: 'assets/images/torso 13.svg', viewValue: 'Phone' },
    { value: 'assets/images/torso 14.svg', viewValue: 'Girl with Travelling Bag' },
    { value: 'assets/images/torso 15.svg', viewValue: 'Pram Stroller' },
    { value: 'assets/images/torso 16.svg', viewValue: 'Coffee' },
    { value: 'assets/images/torso 17.svg', viewValue: 'Finance' },
    { value: 'assets/images/torso 18.svg', viewValue: 'Hello - Red' },
    { value: 'assets/images/torso 19.svg', viewValue: 'Holding Glass' },
    { value: 'assets/images/torso 20.svg', viewValue: 'Lady with Purse' },
    { value: 'assets/images/torso 21.svg', viewValue: 'Girl with Gift' },
    { value: 'assets/images/torso 22.svg', viewValue: 'Book and Phone' },
    { value: 'assets/images/torso 23.svg', viewValue: 'Coffee - Red' },
    { value: 'assets/images/torso 24.svg', viewValue: 'Announcement' },
    { value: 'assets/images/torso 25.svg', viewValue: 'Lady - Red' },
    { value: 'assets/images/torso 26.svg', viewValue: 'Lady - Onboarding' },
    { value: 'assets/images/torso 27.svg', viewValue: 'Lady with Dog' },
    { value: 'assets/images/torso 28.svg', viewValue: 'Burger' },
    { value: 'assets/images/torso 29.svg', viewValue: 'Bottle' },
    { value: 'assets/images/torso 30.svg', viewValue: 'Bag' },
  ];
  head: any[] = [
    // { value: 'assets/images/head 1.svg', viewValue: 'Lady - Loose Pony Tail' },
    { value: 'assets/images/head 2.svg', viewValue: 'Girl - High Pony Tail' },
    { value: 'assets/images/head 3.svg', viewValue: 'Boy' },
    { value: 'assets/images/head 4.svg', viewValue: 'Boy - Beard' },
    { value: 'assets/images/head 5.svg', viewValue: 'Man' },
    { value: 'assets/images/head 6.svg', viewValue: 'Man - Spikes' },
    { value: 'assets/images/head 7.svg', viewValue: 'Boy - Curly' },
    { value: 'assets/images/head 8.svg', viewValue: 'Lady - Bun' },
    { value: 'assets/images/head 9.svg', viewValue: 'Girl Hairband' },
    { value: 'assets/images/head 10.svg', viewValue: 'Boy - Cap' },
    { value: 'assets/images/head 11.svg', viewValue: 'Girl - Hat' },
    { value: 'assets/images/head 12.svg', viewValue: 'Girl - Sportscap' },
    { value: 'assets/images/head 13.svg', viewValue: 'Girl - Mask' },
    { value: 'assets/images/head 14.svg', viewValue: 'Boy - Mask' },
  ];
  background: any[] = [
    { value: 'assets/images/background 1.svg', viewValue: 'Outdoor Strolling' },
    { value: 'assets/images/background 2.svg', viewValue: 'Room View' },
    { value: 'assets/images/background 3.svg', viewValue: 'Tab Setting' },
    { value: 'assets/images/background 4.svg', viewValue: 'Navigation' },
    { value: 'assets/images/background 5.svg', viewValue: 'Internet Tab' },
    { value: 'assets/images/background 6.svg', viewValue: 'Work in Progress' },
    { value: 'assets/images/background 7.svg', viewValue: 'Abstract 1' },
    { value: 'assets/images/background 8.svg', viewValue: 'Abstract 2' },
    { value: 'assets/images/background 9.svg', viewValue: 'Abstract 3' },
    { value: 'assets/images/background 10.svg', viewValue: 'Abstract 4' },
    { value: 'assets/images/background 11.svg', viewValue: 'Music' },
    { value: 'assets/images/background 12.svg', viewValue: 'Plants' },
    { value: 'assets/images/background 13.svg', viewValue: 'Office Space' },
    { value: 'assets/images/background 14.svg', viewValue: 'Texting' },
    { value: 'assets/images/background 15.svg', viewValue: 'Online Payment' },
    { value: 'assets/images/background 16.svg', viewValue: 'Checklist' },
    { value: 'assets/images/background 17.svg', viewValue: 'Cozy Vibe' },
    { value: 'assets/images/background 18.svg', viewValue: 'Thoughts' },
    { value: 'assets/images/background 19.svg', viewValue: 'Living Room' },
    { value: 'assets/images/background 20.svg', viewValue: 'Ideation' },
  ];
  bottom: any[] = [
    { value: 'assets/images/bottom 1.svg', viewValue: 'Shorts' },
    { value: 'assets/images/bottom 2.svg', viewValue: 'Standing' },
    { value: 'assets/images/bottom 3.svg', viewValue: 'Walking - Red' },
    { value: 'assets/images/bottom 4.svg', viewValue: 'Walking - Green' },
    { value: 'assets/images/bottom 5.svg', viewValue: 'Running - Blue' },
    { value: 'assets/images/bottom 6.svg', viewValue: 'Running - Green' },
    { value: 'assets/images/bottom 7.svg', viewValue: 'Standing - Orange' },
    { value: 'assets/images/bottom 8.svg', viewValue: 'Walking - Blue' },
    { value: 'assets/images/bottom 9.svg', viewValue: 'Walking' },
    { value: 'assets/images/bottom 10.svg', viewValue: 'Walking - Yellow' },
    { value: 'assets/images/bottom 11.svg', viewValue: 'Sitting - Orange' },
    { value: 'assets/images/bottom 12.svg', viewValue: 'Sitting - Yellow' },
    { value: 'assets/images/bottom 13.svg', viewValue: 'Jumping' },
    { value: 'assets/images/bottom 14.svg', viewValue: 'Standing - Red' },
  ];

  topImage = this.top[0].value;
  bottomImage = this.bottom[0].value;
  headImage = this.head[1].value;
  backgroundImage = this.background[0].value;

  selectedTop = this.top[0].value;
  selectedBottom = this.bottom[0].value;
  selectedHead = this.head[1].value;
  selectedBackground = this.background[0].value;

  constructor() { }

  ngOnInit(): void { }

  valueChange(data: any, top: number) {
    if (top == 0) {
      this.topImage = data;
    } else if (top == 1) {
      this.bottomImage = data;
    } else if (top == 2) {
      this.headImage = data;
    } else {
      this.backgroundImage = data;
    }
  }
}
