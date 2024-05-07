import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { API, List } from './interfaces/api.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  currentDate: Date;
  dailyForecasts: List[] = [];
  daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];


  constructor(private weatherService: WeatherService) {
    this.currentDate = new Date();
  }

  ngOnInit(): void {
    this.currentDate = new Date();
    this.loadWeeklyForecast('Caceres,ES'); // Cambiar ciudad según necesite
    this.weatherService.getWeeklyForecast('Caceres,ES').subscribe(forecasts => {
      forecasts.forEach(forecast => {
        const { max } = this.weatherService.getMaxTemp(forecast.main.temp);
        forecast.main.temp_max = max;
      });
      this.dailyForecasts = forecasts;
    });

    this.weatherService.getWeeklyForecast('Caceres,ES').subscribe(forecasts => {
      forecasts.forEach(forecast => {
        const { min } = this.weatherService.getMinTemp(forecast.main.temp);
        forecast.main.temp_min = min;
      });
      this.dailyForecasts = forecasts;

    });

  }

  loadWeeklyForecast(city: string): void {
    this.weatherService.getWeeklyForecast(city)
      .subscribe(forecasts => {
        this.dailyForecasts = forecasts;
      },);
  }

  getBackgroundImage(pop: number): string {
    if (pop * 100 <= 29) {
      return 'url(../../assets/sun.png)';
    } else if (pop *100 <= 60) {
      return 'url(../../assets/cloud2.jfif)';
    } else {
      return 'url(../../assets/rain.png)';
    }
  }


}
