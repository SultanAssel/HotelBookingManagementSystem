import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  public CData: number;
  @Input() PData: number;
  constructor() { }

  ngOnInit(): void {
  }

}
