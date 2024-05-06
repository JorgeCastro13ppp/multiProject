import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaApi } from '../interfaces/api.interface';
import { Observable, tap } from 'rxjs';
import { Origen } from '../interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private dataUrl:string = '';
  private apiUrl = 'https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/10037'; // reemplaza con la URL real
  private token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjYXN0cm9qb3JnZWxlb25hcmRvY0BnbWFpbC5jb20iLCJqdGkiOiJmMjk1NTJmMi1jODAzLTQwZjQtODU3OS1lYzY2MzRlZTNjYTQiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTcxNTAyNDIxNCwidXNlcklkIjoiZjI5NTUyZjItYzgwMy00MGY0LTg1NzktZWM2NjM0ZWUzY2E0Iiwicm9sZSI6IiJ9.jI65lax042rURIzqOWqAUQEQmJEaLffpwAZd79KAYLc'; // reemplaza con el token real

  constructor(private http: HttpClient) { }

  getApiData(): Observable<RespuestaApi> {
    return this.http.get<RespuestaApi>(this.apiUrl+'?api_key='+this.token);
  }
  setDataUrl(dataUrl: string): void {
    this.dataUrl = dataUrl;
  }

  getOrigen(dataUrl:string|undefined): Observable<Origen> {
    return this.http.get<Origen>(this.dataUrl);
  }

}
