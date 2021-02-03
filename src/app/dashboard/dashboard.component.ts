import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  top: any[] = [
    {value: 'assets/images/Asset_2.svg', viewValue: 'Blue'},
    {value: 'assets/images/Asset_4.svg', viewValue: 'Pink'}
  ];
  bottom: any[] = [
    {value: 'assets/images/Asset_6.svg', viewValue: 'Pink'},
    {value: 'assets/images/Asset_7.svg', viewValue: 'Yellow'}
  ];

  topImage = "assets/images/Asset_2.svg";
  bottomImage = "assets/images/Asset_6.svg";
  faceImage = "assets/images/Asset_3.svg";

  selectedTop = this.top[0].value;
  selectedBottom = this.bottom[0].value;

  constructor() { }

  ngOnInit(): void {}

  valueChange(data: any, top: boolean){
    if(top) {
      this.topImage = data;
      console.log(this.topImage);
    } else {
      this.bottomImage = data;
      console.log(this.bottomImage);
    }
  }
  

}
