import { Component, Input, OnInit } from '@angular/core';
import { Button } from './interfaces/button.interface';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  currentNumber: string = ''; // Número actual en el display
  history: string[] = []; // Historial de acciones (números y operadores)
  previousNumber: string = ''; // Variable para almacenar el número anterior
  result:string=''; //Variable para almacenar el resultado

  buttons: Button[] = [
    { label: '+', action: 'add', class: 'btn-primary add-button' },
    { label: '-', action: 'subtract', class: 'btn-primary subtract-button' },
    { label: '*', action: 'multiply', class: 'btn-primary multiply-button' },
    { label: '/', action: 'divide', class: 'btn-primary divide-button' },
    { label: 'C', action: 'clear', class: 'btn-danger clear-button' },
    { label: 'CE', action: 'clearEntry', class: 'btn-danger clear-entry-button' },
    { label: '7', action: 'number', class: 'btn-secondary' },
    { label: '8', action: 'number', class: 'btn-secondary' },
    { label: '9', action: 'number', class: 'btn-secondary' },
    { label: '4', action: 'number', class: 'btn-secondary' },
    { label: '5', action: 'number', class: 'btn-secondary' },
    { label: '6', action: 'number', class: 'btn-secondary' },
    { label: '1', action: 'number', class: 'btn-secondary' },
    { label: '2', action: 'number', class: 'btn-secondary' },
    { label: '3', action: 'number', class: 'btn-secondary' },
    { label:'π', action: 'percentage', class: 'btn-primary pi-button'},
    { label: '0', action: 'number', class: 'btn-secondary' },
    { label: '.', action: 'decimal', class: 'btn-secondary point-button' }
  ];

  onCalculate() {
    // Lógica de cálculo aquí usando eval() u otro método seguro
    let expression= this.history.join('');
    let resultCalc = eval(expression) ;
    // Supongamos que el resultado se almacena en una variable 'result'
    this.result = resultCalc;
    this.history = [resultCalc];
    console.log(resultCalc);
  }

  // Función para manejar los clics en los botones
  onButtonClick(value: string,currentNumber:string) {
    if (value === '=') {
      // Calcular el resultado y enviarlo al historial
      this.calculateResult();
    } else if (value === 'C') {
      // Limpiar la entrada actual
      this.clearInput();
    }else if (value=='CE'){
      this.clearEntryInput();
    }else if(value=='π'){
      // Asignar el valor constante de π al número actual
    this.currentNumber = Math.PI.toString();
    this.addToHistory(Math.PI.toString());
    }
     else {
      // Agregar al historial y actualizar el número actual
      this.addToHistory(value);
      this.addToDisplay(value);
    }
  }

  // Función para agregar al historial
  addToHistory(value: string) {
    this.history.push(value);
    // Puedes emitir un evento aquí para notificar a otros componentes sobre el cambio en el historial
  }

  addToDisplay(value:string){
    if(value==='+'||value==='-'||value==='*'||value==='/'){
      if(this.currentNumber!==''){
        this.currentNumber= this.previousNumber;
      }
    }else{
      this.currentNumber+=value;
    }
  }


    // Función para calcular el resultado
    calculateResult() {
      if (this.currentNumber) {
        this.history.push(this.currentNumber); // Agregar la última entrada al historial
        try {
          const result = eval(this.history.join(' ')); // Calcular el resultado usando eval
          this.currentNumber = result.toString(); // Mostrar el resultado en el display
          this.history = []; // Limpiar el historial después del cálculo
        } catch (error) {
          console.error('Error al calcular el resultado:', error);
        }
      }
    }

  clearInput() {
    this.history = [];
    this.currentNumber = '';
    this.previousNumber='';
    this.result='';
  }

  clearEntryInput(){
    if (this.currentNumber) {
      // Eliminar el último carácter del número actual
      this.currentNumber = this.currentNumber.slice(0, -1);
      // Elimina el último elemento del historial

    }
    this.history.pop(); // Elimina el último elemento del historial
  }

    constructor() { }

  ngOnInit(): void {
  }

  // Función para determinar la clase de estilo del operador
  // getButtonStyleClass(button: Button): string {
  //   if (['+', '-', '*', '/', √'].includes(button.label)) {
  //     return 'operator';
  //   }
  //   return '';
  // }

}
