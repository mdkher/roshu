import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  top: any[] = [
    {value: 'assets/images/Blue_Top.svg', viewValue: 'Blue'},
    {value: 'assets/images/Pink_Top.svg', viewValue: 'Pink'}
  ];
  bottom: any[] = [
    {value: 'assets/images/Pink_Bottom.svg', viewValue: 'Pink'},
    {value: 'assets/images/Yellow_Bottom.svg', viewValue: 'Yellow'}
  ];

  topImage = this.top[0].value;
  bottomImage = this.bottom[0].value;
  faceImage = "assets/images/Face.svg";

  selectedTop = this.top[0].value;
  selectedBottom = this.bottom[0].value;

  constructor() { }

  ngOnInit(): void {}

  valueChange(data: any, top: boolean){
    if(top) {
      this.topImage = data;
    } else {
      this.bottomImage = data;
    }
  }
  

}
