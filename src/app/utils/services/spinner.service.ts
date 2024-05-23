import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  isLoading:boolean=false;

  constructor() { }

  showSpinner(){
    this.isLoading=true;
  }

  hideSpinner(){
    this.isLoading=false;
  }
}
