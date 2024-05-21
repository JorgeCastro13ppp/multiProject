import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MunicipalityService {

  constructor(private router: Router) { }

  navigateToWeather(munCode:string){
    this.router.navigate(['/weather-aemet'],{queryParams:{munCode}})
  }
}
