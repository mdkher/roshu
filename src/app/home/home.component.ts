import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clicked(){
    var background = document.getElementById("background");
    background.classList.toggle('clicked');
    setTimeout(() => {
      this.router.navigate(['dashboard']);
  }, 600);
  }

}
