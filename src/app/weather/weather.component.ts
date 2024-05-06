import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { RespuestaApi } from './interfaces/api.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  dataUrl?:string;
  weatherData?:RespuestaApi;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getApiData().subscribe((data) => {
      this.weatherData = data;
      this.dataUrl = data.datos;
    });
  }

  }


