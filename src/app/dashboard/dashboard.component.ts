import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  top: any[] = [
    { value: 'assets/images/top1.svg', viewValue: 'Eating' },
    { value: 'assets/images/top2.svg', viewValue: 'Bitcoin' },
    { value: 'assets/images/top3.svg', viewValue: 'Stick Walking' },
  ];
  bottom: any[] = [
    { value: 'assets/images/bottom-1.svg', viewValue: 'Yellow' },
  ];

  topImage = this.top[0].value;
  bottomImage = this.bottom[0].value;
  faceImage = "assets/images/Face.svg";

  selectedTop = this.top[0].value;
  selectedBottom = this.bottom[0].value;

  constructor() { }

  ngOnInit(): void { }

  valueChange(data: any, top: boolean) {
    if (top) {
      this.topImage = data;
    } else {
      this.bottomImage = data;
    }
  }


}
