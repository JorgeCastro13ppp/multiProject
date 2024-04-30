import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'calculator-equal-button',
  templateUrl: './equal-button.component.html',
  styleUrls: ['./equal-button.component.scss']
})
export class EqualButtonComponent implements OnInit {

  @Output() calculateClicked = new EventEmitter<void>()

  onCalculateClick(){
    this.calculateClicked.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
