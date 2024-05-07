import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'db674ac2cea703bd2214a511a5fb469d';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';

  constructor(private http: HttpClient) { }

  getWeeklyForecast(city: string): Observable<any[]> {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;

    return this.http.get<any>(url).pipe(
      map(response => this.parseForecastData(response))
    );
  }

  private parseForecastData(data: any): any[] {
    const dailyForecasts: any[] = [];

    const dailyData = data.list.filter((item: any, index: number) => index % 8 === 0);

    dailyData.forEach((item: any) => {
      const date = new Date(item.dt * 1000);
      const dayName = date.toLocaleString('es-ES', { weekday: 'long' });
      const dayNumber = date.getDate();
      const monthName = date.toLocaleString('es-ES', { month: 'long' });

      const forecast = {
        date: `${dayName} - ${dayNumber} ${monthName}`,
        rainProbability: item.pop * 100,
        windDirection: this.getWindDirection(item.wind.deg),
        tempMin: item.main.temp_min,
        tempMax: item.main.temp_max
      };

      dailyForecasts.push(forecast);
    });

    return dailyForecasts;
  }

  private getWindDirection(degree: number): string {
    const directions = ['Norte', 'Noreste', 'Este', 'Sureste', 'Sur', 'Suroeste', 'Oeste', 'Noroeste'];
    const index = Math.round((degree % 360) / 45);
    return directions[index % 8];
  }

}

