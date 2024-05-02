import { Component, OnInit } from '@angular/core';
import { LocationServiceService } from '../../services/location-service.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  daysOfWeek = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];
  weatherData: any = [];
  constructor(private locationService:LocationServiceService) { }

  ngOnInit(): void {
    this.locationService.fetchData().subscribe(
      (data)=>{
        this.weatherData = data;
        console.log('Weather data',this.weatherData);
      },
      (error)=>{
        console.error('Error fetching',error);
      }
    )
  }

  getWeatherDay():void {

  }

}
