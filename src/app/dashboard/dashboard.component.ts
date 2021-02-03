import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  top: any[] = [
    {value: '../../assets/Asset 2.svg', viewValue: 'Blue'},
    {value: '../../assets/Asset 4.svg', viewValue: 'Pink'}
  ];
  bottom: any[] = [
    {value: '../../assets/Asset 6.svg', viewValue: 'Pink'},
    {value: '../../assets/Asset 7.svg', viewValue: 'Yellow'}
  ];

  topImage;
  bottomImage;

  selectedTop = this.top[0].value;
  selectedBottom = this.bottom[0].value;

  constructor() { }

  ngOnInit(): void {
    this.topImage = "../../assets/Asset 2.svg";
    this.bottomImage = "../../assets/Asset 6.svg";
  }

  valueChangeTop(data: any){
    this.topImage = data;
    console.log(this.topImage);
  }
  valueChangeBottom(data: any){
    this.bottomImage = data;
    console.log(this.bottomImage);
  }

}
