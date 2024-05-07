import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { API, List } from '../interfaces/api.interface';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'db674ac2cea703bd2214a511a5fb469d';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';

  constructor(private http: HttpClient) { }

  getWeeklyForecast(city: string): Observable<List[]> {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;

    return this.http.get<API>(url).pipe(
      map(response => this.parseForecastData(response))
    );
  }

  private parseForecastData(data: API): List[] {
    const dailyForecasts: List[] = [];

    const dailyData = data.list.filter((item: List, index: number) => index % 8 === 0);

    dailyData.forEach((item: List) => {
      const forecast: List = {
        dt_txt: item.dt_txt,
        main: {
          temp: item.main.temp,
          feels_like: item.main.feels_like,
          temp_min: item.main.temp_min,
          temp_max: item.main.temp_max,
          pressure: item.main.pressure,
          sea_level: item.main.sea_level,
          grnd_level: item.main.grnd_level,
          humidity: item.main.humidity,
          temp_kf: item.main.temp_kf
        },
        wind: {
          speed: item.wind.speed,
          deg: item.wind.deg,
          gust: item.wind.gust,
          direction: this.getWindDirection(item.wind.deg), // llamamos al método getWindDirection aquí
        },
        pop: item.pop,
        dt: 0,
        weather: [],
        clouds: {
          all: item.clouds.all
        },
        visibility: 0,
        sys: {
          pod : item.sys.pod
        }
      };

      dailyForecasts.push(forecast);
    });

    return dailyForecasts;
  }


  private getWindDirection(degree: number): string {
    const directions = ['Norte', 'Noreste', 'Este', 'Sureste', 'Sur', 'Suroeste', 'Oeste', 'Noroeste'];
    const index = Math.round((degree % 360) / 45) % 8; // aseguramos que el índice esté entre 0 y 7
    return directions[index];
  }


  public getMaxTemp(temperatures: number[]): { max: number} {
    let maxTemp = temperatures[0];

    for (let i = 1; i < temperatures.length; i++) {
      if (temperatures[i] > maxTemp) {
        maxTemp = temperatures[i];
      }
    }

    return { max: maxTemp};
  }

  public getMinTemp(temperatures: number[]): { min: number } {
    let minTemp = temperatures[0];

    for (let i = 1; i < temperatures.length; i++) {
      if (temperatures[i] < minTemp) {
        minTemp = temperatures[i];
      }
    }

    return { min: minTemp };
  }

}

