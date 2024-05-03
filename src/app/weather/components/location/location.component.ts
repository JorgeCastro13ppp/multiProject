import { Component, OnInit } from '@angular/core';
import { LocationServiceService } from '../../services/location-service.service';
import { ApiCall } from '../../interfaces/api.interface';
import { Dia } from '../../interfaces/dias.interface';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  daysOfWeek = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];
  apiData?:ApiCall;
  dayData?:Dia;
  constructor(private locationService:LocationServiceService) { }

  ngOnInit(): void {
    this.locationService.fetchApi().subscribe(
      (api:ApiCall)=>{
        this.apiData = api;
        console.log('Weather data',this.apiData);
        console.log('Url data: ',this.apiData.datos)
      },
      (error)=>{
        console.error('Error fetching',error);
      }
    );
  }

  getWeatherDay():void {
    this.locationService.fetchData().subscribe(
      (day:Dia)=>{
        this.dayData=day;
        console.log('Day data',this.dayData);
      },
      (error)=>{
        console.error('Error fetching',error);
      }
    );
  }

}
