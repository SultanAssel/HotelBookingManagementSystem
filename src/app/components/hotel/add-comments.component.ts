import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-add-comments',
  templateUrl: './add-comments.component.html',
  styleUrls: ['./add-comments.component.css']
})
export class AddCommentsComponent implements OnInit {
  @Input() PData: number;
  public CData: number;
  @Output() childEvent = new EventEmitter();
  constructor() { }
  // tslint:disable-next-line:typedef
  onChange(value) {
    this.childEvent.emit(value);

  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

}

