import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmentAemet } from '../environments/environment.aemet';
import { Observable, switchMap } from 'rxjs';
import { APIAemet } from '../interfaces/interface.aemet';
import { Data } from '../interfaces/interface.data';


@Injectable({
  providedIn: 'root'
})
export class AemetService {

  urlApiAemet:string = environmentAemet.apiAemet;
  token:string = environmentAemet.token;

  constructor(private http: HttpClient) { }

  getApiAemet():Observable<APIAemet>{
    return this.http.get<APIAemet>(this.urlApiAemet+'10037'+'?api_key='+this.token);
  }

  getDataApi(urlDataApi:string):Observable<Data[]>{
    return this.http.get<Data[]>(urlDataApi);
  }

}
