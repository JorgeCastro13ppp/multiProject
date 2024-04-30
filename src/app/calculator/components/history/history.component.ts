import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'calculator-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  @Input() history:string[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
