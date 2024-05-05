import { Component, OnInit } from '@angular/core';
import { Dia } from './interfaces/dias.interface';
import { LocationServiceService } from './services/location-service.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  daysOfWeek = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];
  // apiData?:ApiCall;
  dayData?:Dia;
  constructor(private locationService:LocationServiceService) { }

  ngOnInit(): void {
    this.locationService.fetchApi().subscribe(
      (day:Dia)=>{
        this.dayData = day;
        console.log('Day data:', this.dayData );
      },
      (error)=>{
        console.error('Error fetching API data',error);
      }
    );
  }

}
