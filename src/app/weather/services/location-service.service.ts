import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ApiCall} from '../interfaces/api.interface';
import { Dia } from '../interfaces/dias.interface';
@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {

  private apiUrl = 'https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/10010';
  private token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjYXN0cm9qb3JnZWxlb25hcmRvY0BnbWFpbC5jb20iLCJqdGkiOiI1MjZhNjJjYy0zYzY1LTRlMTMtODVjNS1mMTJmOTBmOWY0ZGIiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTcxNDY0NDM1MiwidXNlcklkIjoiNTI2YTYyY2MtM2M2NS00ZTEzLTg1YzUtZjEyZjkwZjlmNGRiIiwicm9sZSI6IiJ9.gHFJ1fcQx-UDDCz2vzsRoYUnqid3V-pa-XTjOHklU6I';
  private apiUrl2='';
  constructor(private http:HttpClient) { }

  // Crear interfaz para usarla en el tipo que devuelve fetchData
  fetchApi():Observable<ApiCall>{
    return this.http.get<ApiCall>(this.apiUrl+'?api_key='+this.token);
  }

  fetchData():Observable<Dia>{
    return this.http.get<Dia>(this.apiUrl2);
  }
}
