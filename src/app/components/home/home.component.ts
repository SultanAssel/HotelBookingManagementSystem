import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public showAll: any = false;

  // tslint:disable-next-line:typedef
  triggerReadMore() {
    this.showAll = true;
  }


  constructor() { }

  ngOnInit(): void {
  }

}


