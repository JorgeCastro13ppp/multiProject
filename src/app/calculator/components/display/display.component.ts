import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'calculator-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
   @Input() currentNumber: string = ''; // Valor inicial en el display
   @Input() previousNumber:string='';
  @Input() history:string[]=[];
  @Input() result:string ='';



  constructor() { }

  ngOnInit(): void {
  }

}
