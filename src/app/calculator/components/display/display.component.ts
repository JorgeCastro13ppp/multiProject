import { Component, Input, OnInit } from '@angular/core';

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


  // Método para determinar qué mostrar en el display
    // Método para determinar qué mostrar en el display
    getDisplayedValue(): string {

      let displayedValue: string;

      if (this.result !== '') {
        displayedValue = this.result; // Mostrar el resultado si está presente
        // Limpiar el resultado después de mostrarlo
          this.result = '';

      } else {
        displayedValue = this.currentNumber; // Mostrar el número actual si no hay resultado

      }

      return displayedValue;

    }

  constructor() { }

  ngOnInit(): void {
  }

}
