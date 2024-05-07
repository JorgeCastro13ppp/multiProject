import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  currentDate: string;
  dailyForecasts: any[] = [];

  constructor(private weatherService: WeatherService) {
    const currentDateObj = new Date();
    this.currentDate = currentDateObj.toLocaleDateString('es-ES'); // Formato 'dd/mm/aa'
  }

  ngOnInit(): void {
    this.loadWeeklyForecast('Caceres,ES'); // Cambia la ciudad según necesites
  }

  loadWeeklyForecast(city: string): void {
    this.weatherService.getWeeklyForecast(city)
      .subscribe(forecasts => {
        this.dailyForecasts = forecasts;
      });
  }


}
