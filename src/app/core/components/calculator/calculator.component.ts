import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Buttons } from '../../../shared/interfaces/button.interface';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent  {

  buttons:Buttons[] = [
    {label:'7',value:'7'},
    {label:'8',value:'8'},
    {label:'9',value:'9'},
    {label:'4',value:'4'},
    {label:'5',value:'5'},
    {label:'6',value:'6'},
    {label:'1',value:'1'},
    {label:'2',value:'2'},
    {label:'3',value:'3'}
 ];

 operatorsTop:Buttons[]=[
    {label:'CE',value:'CE'},
    {label:'C',value:'C'},
    {label:'±',value:'±'}
 ];

 operatorsRight:Buttons[] = [
    {label:'/',value:'/'},
    {label:'*',value:'*'},
    {label:'-',value:'-'}
 ];

 numberScreenValue:string='';
 calcScreenValue:string='';
 isResult: boolean = false;
 hasOperator:boolean = false;
 clearAll(){
  this.numberScreenValue='';
  this.calcScreenValue='';
 }

 clearEntry(){
  this.numberScreenValue='';
 }

 addSubstract(){
  if (this.numberScreenValue.charAt(0) === '-') {
    this.numberScreenValue = this.numberScreenValue.slice(1);
  } else {
    this.numberScreenValue = `-${this.numberScreenValue}`;
  }
 }

 handleclick(value:string) {
  if (value=='+'||value=='-'||value=='*'||value=='/') {
    if(this.hasOperator){
      return;
    }
    this.hasOperator=true;
    console.log('entro en op');
    this.calcScreenValue += `${this.numberScreenValue} ${value}`;
    this.numberScreenValue = '';
  }
  else if(value=='C'){
    this.clearAll();
  }
  else if(value=='CE'){
    this.clearEntry();
  }
  else if (value=='±'){
    this.addSubstract();
  }
  else if(value=='='){
    const result = eval(this.calcScreenValue.concat(this.numberScreenValue));
    this.numberScreenValue= result;
    this.isResult=true;
    this.calcScreenValue='';
  }else if (value=='.'){
    if(!this.numberScreenValue.includes('.')){
      this.numberScreenValue+=value;
    }
  }
  else {
    if(this.isResult && !isNaN(Number(value))){
      console.log('entro comporbar resultado');
      this.numberScreenValue=value;
      this.isResult=false;
      this.hasOperator=false;
    }else{
      if(this.numberScreenValue.length<12){
        this.numberScreenValue += value;
        this.numberScreenValue = this.removeLeadingZeros(this.numberScreenValue);
      }else{
        return;
      }

    }
    this.hasOperator = false;
  }
 }

 removeLeadingZeros(value: string): string {
  const parts = value.split('.');
  if (parts.length > 1) {
    parts[0] = parts[0].replace(/^0+/g, '');
    if (parts[0] === '') {
      parts[0] = '0';
    }
  }
  return parts.join('.');
}
}
