import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { MapService } from './services/map.service';


@Component({
  selector: 'app-weather-map',
  templateUrl: './weather-map.component.html',
  styleUrls: ['./weather-map.component.scss']
})
export class WeatherMapComponent implements OnInit {

  constructor(private mapService:MapService) { }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

  /*
    This function is to load the forecast weather. This will subsrcibe from the
    publisher of the URL from the Forecast service which returns an observable.
   */
    loadForecastWeather() {

     }

}



