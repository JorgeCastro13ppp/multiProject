import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmentAemet } from '../../shared/environments/environment.aemet';
import { Observable, switchMap } from 'rxjs';
import { APIAemet } from '../../shared/interfaces/interface.aemet';
import { Data } from '../../shared/interfaces/interface.data';


@Injectable({
  providedIn: 'root'
})
export class AemetService {

  urlApiAemet:string = environmentAemet.apiAemet;
  token:string = environmentAemet.token;

  constructor(private http: HttpClient) { }

  getApiAemet(postalCode:string):Observable<APIAemet>{
    return this.http.get<APIAemet>(this.urlApiAemet+postalCode+'?api_key='+this.token);
  }

  getDataApi(urlDataApi:string):Observable<Data[]>{
    return this.http.get<Data[]>(urlDataApi);
  }



}
