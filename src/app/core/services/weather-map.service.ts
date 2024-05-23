import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmentsMap } from '../../shared/environments/environments.map';

@Injectable({
  providedIn: 'root'
})
export class WeatherMapService {

  constructor(private http: HttpClient) { }

  private apiKey = environmentsMap.apiKey;
  private apiUrl = 'https://tile.openweathermap.org/map/';

  getMapData(layer:string,z:number,x:number,y:number) {
    const url = `${this.apiUrl}${layer}/${z}/${x}/${y}.png?appid=${this.apiKey}`;
    return this.http.get(url);
  }

}
